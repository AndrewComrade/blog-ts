import { PostsActions, postsActionTypes, PostsState } from '~/types/posts';

const initialState: PostsState = {
    loading: false,
    error: '',
    posts: [],
    post: null,
    currentPage: 1,
    pageLimit: 10,
};

const postsReducer = (state = initialState, action: PostsActions) => {
    switch (action.type) {
        case postsActionTypes.FETCH_POSTS:
            return { ...state, loading: true };
        case postsActionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case postsActionTypes.FETCH_POSTS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case postsActionTypes.FETCH_POST_SUCCESS:
            return { ...state, loading: false, post: action.payload };
        case postsActionTypes.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};

export default postsReducer;
