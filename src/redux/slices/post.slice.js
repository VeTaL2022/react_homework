import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
};
const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getPost();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload;
        },
        deletePostById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAllPosts.pending, (state, action) => {
                state.loading = true;
            })
});

const {reducer: postReducer, actions: {setCurrentPost, deletePostById}} = postSlice;

const postActions = {
    getAllPosts,
    setCurrentPost,
    deletePostById
}

export {postReducer, postActions};