import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    currentUser:null,
    loading:false,
    error:null
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        getUser: (state, action) => {
            state.users = action.payload
        }
    }
});

const {reducer:userReducer, actions:{getUser}} = userSlice;

const userActions = {
    getUser
}

export {userReducer, userActions}