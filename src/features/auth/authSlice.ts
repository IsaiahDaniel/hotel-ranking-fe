import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authService from "./authService";

let user = localStorage.getItem('user');        

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch (err: any) {
        // console.log("errrrrrr", err);
        const message = err.response.data;
        return thunkAPI.rejectWithValue(message);
    }
})

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (err: any) {
        // console.log("errrrrrr--------", err);
        const message = err.response.data;
        return thunkAPI.rejectWithValue(message);
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        return authService.logout();
    } catch (err: any) {
        const message = err.response.data;
        return thunkAPI.rejectWithValue(message);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, action: PayloadAction<any>) => {
                // console.log("Pending....");
                state.isLoading = true;
            })
            .addCase(register.rejected, (state, action: PayloadAction<any>) => {
                // console.log("rejected....");
                // console.log("Reject action....", action);
                state.isError = true;
                state.isSuccess = false;
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
                console.log("action payload", action.payload)
                state.isSuccess = true;
                state.isLoading = false;
                state.user = action.payload;
            })

            .addCase(login.pending, (state, action: PayloadAction<any>) => {
                console.log("login loading")
                state.isLoading = true;
            })
            .addCase(login.rejected, (state, action: PayloadAction<any>) => {
                console.log("login rejected")
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                state.isLoading = false;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                console.log("login fulfilled")
                state.isError = false;
                state.isSuccess = true;
                state.isLoading = false;
                state.user = action.payload.token;
            })

            .addCase(logout.pending, (state, action: PayloadAction<any>) => {
                state.isLoading = true;
            })
            .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(logout.fulfilled, (state, action: PayloadAction<any>) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.user = null;
            })
    }
})

export const { reset } = authSlice.actions;

export default authSlice.reducer;