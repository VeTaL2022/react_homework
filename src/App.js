import {Provider} from "react-redux";

import './App.css';
import {MainComponent} from "./components";
import {combineReducers, createStore} from "redux";

export const USERS = 'USERS';
export const loadUsers = (payload) => {
    return {type: USERS, payload}
}

export const POSTS = 'POSTS';
export const loadPosts = (payload) => {
    return {type: POSTS, payload}
}

export const COMMENTS = 'COMMENTS';
export const loadComments = (payload) => {
    return {type: COMMENTS, payload}
}

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
            const id = action.payload;
            const post = state.posts.find(value => value.userId === id);
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
            const id = action.payload;
            const comment = state.comments.find(value => value.postId === id);
            return {...state, comment: comment}
        default:
            return state;
    }
}

let reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
})

const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <MainComponent/>
        </Provider>
    );
}

export default App;