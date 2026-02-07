'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useAppDispatch } from '@/lib/store/hooks';
import { setAuth } from '@/lib/store/slices/authSlice';
import { customerService } from '@/lib/services/customerService';

const AuthSync = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const syncAuth = async () => {
            try {
                const userDataCookie = Cookies.get('userData');
                const accessToken = Cookies.get('accessToken');
                const isAuthenticatedCookie = Cookies.get('isAuthenticated');

                if (userDataCookie && accessToken && isAuthenticatedCookie === 'true') {
                    // Cookies are URL encoded, so we need to decode them
                    const decodedUserData = decodeURIComponent(userDataCookie);
                    const initialUser = JSON.parse(decodedUserData);

                    // Dispatch initial data from cookie immediately
                    dispatch(setAuth({
                        user: initialUser,
                        accessToken,
                        isAuthenticated: true
                    }));

                    // Fetch fresh data from API
                    try {
                        const freshUser = await customerService.getCustomerById(initialUser.userId);
                        if (freshUser) {
                            dispatch(setAuth({
                                user: freshUser,
                                accessToken,
                                isAuthenticated: true
                            }));
                        }
                    } catch (apiError) {
                        console.error('Error fetching fresh user data:', apiError);
                        // We still have the cookie data, so we don't logout
                    }
                } else {
                    dispatch(setAuth({
                        user: null,
                        accessToken: null,
                        isAuthenticated: false
                    }));
                }
            } catch (error) {
                console.error('Error syncing auth from cookies:', error);
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
