const USERS = 'USERS';
export const loadUsers = (payload) => {
    return {type: USERS, payload}
}

const POSTS = 'POSTS';
export const loadPosts = (payload) => {
    return {type: POSTS, payload}
}

const COMMENTS = 'COMMENTS';
export const loadComments = (payload) => {
    return {type: COMMENTS, payload}
}

export {USERS, POSTS, COMMENTS}