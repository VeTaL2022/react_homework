import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {userService} from "../../services";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    userFromApi: null
};

const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getUser();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getUserById = createAsyncThunk(
    'userSlice/getUserById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        deleteUserById: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(index, 1);
            console.log(current(state.users));
        }
    },
    // extraReducers: {
    //     [getAllUsers.fulfilled]: (state, action) => {
    //         state.users = action.payload
    //     }
    // }
    extraReducers: builder =>
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAllUsers.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.userFromApi = action.payload;
            })
});

const {reducer: userReducer, actions: {setCurrentUser, deleteUserById}} = userSlice;

const userActions = {
    getAllUsers,
    setCurrentUser,
    getUserById,
    deleteUserById
}

export {userReducer, userActions}