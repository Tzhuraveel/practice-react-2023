import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersRequests} from "../../api";



const initialState = {
    users: [],
    user: null,
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersRequests.getAllUsers();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
             .addCase(getAll.fulfilled, (state, action) => {
                 state.loading = false
                 state.users = action.payload
             })
            .addCase(getAll.rejected, (state, action) => {
                 state.loading = false
                 state.errors = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
});



const {reducer: userReducer, actions: {getUser}} = userSlice;

const userActions = {
    getAll,
    getUser
}

export {
    userActions, userReducer
}


