import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//  Get user from local storage

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user : user ? user : null ,
    isError: false,
    isLoading : false,
    isSuccess : false,
    message : '',
}

// Register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI)=>{
    try {
        return await authService.register(user)
    } catch (error) {
        
    }
})

export const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            reset : (state) => {
                state.isError = false,
                state.isLoading = false,
                state.isSuccess = false,
                state.message = ''
            }
        },
        extraReducers: () =>{

        }

        
    }
)


export const {reset} = authSlice.actions
export default authSlice.reducer;
