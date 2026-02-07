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
 * Encrypt a project ID
 */
export function encryptProjectId(projectId: string | number): string {
    const id = String(projectId);
    const encrypted = xorEncryptDecrypt(id, ENCRYPTION_KEY);
    return btoa(encrypted); // Base64 encode for URL safety
}

/**
 * Decrypt a project ID
 */
export function decryptProjectId(encryptedId: string): string {
    try {
        const decoded = atob(encryptedId); // Base64 decode
        return xorEncryptDecrypt(decoded, ENCRYPTION_KEY);
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
    // If it's a number, return as is
    if (/^\d+$/.test(param)) {
        return param;
    }
    
    // Otherwise, try to decrypt it
    return decryptProjectId(param);
}
