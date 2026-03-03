/**
 * Encryption utilities for project IDs
 * Simple XOR-based encryption for basic obfuscation
 */

// Get encryption key from environment or use default
const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'zrealty3d-project-key-2024';

/**
 * Simple XOR encryption/decryption
 */
function xorEncryptDecrypt(input: string, key: string): string {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

/**
 * Encrypt a project ID to a fixed length of 10 characters
 */
export function encryptProjectId(projectId: string | number): string {
    const id = String(projectId);

    // To ensure a consistent length of 10 characters after Base64 encoding (without padding),
    // we pad the input string to exactly 7 characters.
    // 7 bytes -> 10 Base64 characters (plus 2 padding characters which we strip)
    const paddedId = id.padStart(7, '0');

    const encrypted = xorEncryptDecrypt(paddedId, ENCRYPTION_KEY);

    // Base64 encode and remove padding to get exactly 10 characters
    return btoa(encrypted).replace(/=/g, '');
}

/**
 * Decrypt a project ID from a 10-character encrypted string
 */
export function decryptProjectId(encryptedId: string): string {
    if (!encryptedId) return '';

    try {
        // Add back Base64 padding if it was stripped
        // For a 10-character string, we need 2 '=' to make it 12 (multiple of 4)
        let base64 = encryptedId;
        while (base64.length % 4 !== 0) {
            base64 += '=';
        }

        const decoded = atob(base64);
        const decrypted = xorEncryptDecrypt(decoded, ENCRYPTION_KEY);

        // Remove the '0' padding we added during encryption
        // If the ID was originally '0', we return '0'
        return decrypted.replace(/^0+/, '') || '0';
    } catch (error) {
        console.error('Failed to decrypt project ID:', error);
        return '';
    }
}

/**
 * Extract project ID from URL parameter
 * Handles both encrypted and plain project IDs
 */
export function extractProjectIdFromParam(param: string): string {
    if (!param) return '';

    // If it's a numeric string that's not 10 characters, it's likely a plain ID
    if (/^\d+$/.test(param) && param.length !== 10) {
        return param;
    }

    // Otherwise, try to decrypt it
    const decrypted = decryptProjectId(param);

    // If decryption failed or returned empty and the param was numeric, return param as is
    if (!decrypted && /^\d+$/.test(param)) {
        return param;
    }

    return decrypted;
}
