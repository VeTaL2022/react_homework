import {combineReducers} from "redux";

import {COMMENTS, POSTS, USERS} from "./loadComponents";

const userReducer = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case USERS:
            return {...state, users: action.payload};
        case 'USER':
            const id = action.payload;
            const user = state.users.find(value => value.id === id);
            return {...state, user: user}
        default:
            return state;
    }
}

const postReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case POSTS:
            return {...state, posts: action.payload};
        case 'POST':
            const userId = action.payload;
            const post = state.posts.find(value => value.userId === userId);
            return {...state, post: post}
        default:
            return state;
    }
}

const commentReducer = (state = {comments: [], comment: null}, action) => {
    switch (action.type) {
        case COMMENTS:
            return {...state, comments: action.payload};
        case 'COMMENT':
            const postId = action.payload;
            const comment = state.comments.find(value => value.postId === postId);
            return {...state, comment: comment}
        default:
            return state;
    }
}

export const reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
});