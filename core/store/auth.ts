import { UserAuth } from '@/types';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    isAuthenticated: boolean;
    lastAuthenticatedAt: number | null;
    user: UserAuth | null;
    automaticReconnect: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    lastAuthenticatedAt: null,
    user: null,
    automaticReconnect: true,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserAuth>) => {
            console.log("authSlice.login called");
            state.isAuthenticated = true;
            state.lastAuthenticatedAt = Date.now();
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.lastAuthenticatedAt = null;
            state.user = null;
        },
        setAutomaticReconnect: (state, action: PayloadAction<boolean>) => {
            state.automaticReconnect = action.payload;
        },
    },
})

export const { login, logout, setAutomaticReconnect } = authSlice.actions

export default authSlice.reducer