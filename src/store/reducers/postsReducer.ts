import { PostsActions, PostsActionTypes, PostsState } from '~/types/posts';

const initialState: PostsState = {
    loading: false,
    error: '',
    posts: [],
    post: null,
    postsPage: 1,
    postsLimit: 10,
};

const postsReducer = (state = initialState, action: PostsActions) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return { ...state, loading: true };
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case PostsActionTypes.FETCH_POST_SUCCESS:
            return { ...state, loading: false, post: action.payload };
        case PostsActionTypes.SET_POSTS_PAGE:
            return { ...state, postsPage: action.payload };
        default:
            return state;
    }
};

export default postsReducer;
