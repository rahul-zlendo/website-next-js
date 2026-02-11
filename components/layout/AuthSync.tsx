'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useAppDispatch } from '@/lib/store/hooks';
import { setAuth } from '@/lib/store/slices/authSlice';
import { getUserDetailsByTokenService } from '@/lib/services/loginService';

const AuthSync = () => {
    const dispatch = useAppDispatch();

    // Helper function to clean token (remove quotes and trim)
    const cleanToken = (token: string | null): string | null => {
        if (!token) return null;
        // Remove leading/trailing quotes and whitespace
        let cleaned = token.trim();
        // Remove surrounding quotes if present
        if ((cleaned.startsWith('"') && cleaned.endsWith('"')) || 
            (cleaned.startsWith("'") && cleaned.endsWith("'"))) {
            cleaned = cleaned.slice(1, -1);
        }
        // Remove escaped quotes
        cleaned = cleaned.replace(/\\"/g, '"').replace(/\\'/g, "'");
        return cleaned.trim();
    };

    useEffect(() => {
        const syncAuth = async () => {
            try {
                const accessToken = Cookies.get('accessToken');
                // const rawToken = localStorage.getItem('accessToken');
                // const accessToken = cleanToken(rawToken);
                // console.log('Raw token:', rawToken, 'Cleaned token:', accessToken);

                if (accessToken) {
                    try {
                        // Call API to verify token and get user details
                        const userData = await getUserDetailsByTokenService(accessToken);
                        console.log(userData,"userData",accessToken);
                        if (userData) {
                            // Set authenticated state with user data from API
                            dispatch(setAuth({
                                user: userData,
                                accessToken,
                                isAuthenticated: true
                            }));
                        } else {
                            // No user data returned, set as not authenticated
                            dispatch(setAuth({
                                user: null,
                                accessToken: null,
                                isAuthenticated: false
                            }));
                        }
                    } catch (apiError) {
                        console.error('Error verifying token or fetching user data:', apiError);
                        // Token is invalid or expired, set as not authenticated
                        dispatch(setAuth({
                            user: null,
                            accessToken: null,
                            isAuthenticated: false
                        }));
                    }
                } else {
                    // No token found, set as not authenticated
                    dispatch(setAuth({
                        user: null,
                        accessToken: null,
                        isAuthenticated: false
                    }));
                }
            } catch (error) {
                console.error('Error syncing auth:', error);
                dispatch(setAuth({
                    user: null,
                    accessToken: null,
                    isAuthenticated: false
                }));
            }
        };

        syncAuth();
    }, [dispatch]);

    return null;
};

export default AuthSync;
