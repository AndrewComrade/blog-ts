export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PostsState {
    posts: IPost[];
    post: IPost | null;
    loading: boolean;
    error: string;
    currentPage: number;
    pageLimit: number;
}

export enum postsActionTypes {
    FETCH_POSTS = 'blog/fetchPosts',
    FETCH_POSTS_SUCCESS = 'blog/fetchPostsSuccess',
    FETCH_POST_SUCCESS = 'blog/fetchPostSuccess',
    FETCH_POSTS_ERROR = 'blog/fetchPostsError',
    SET_CURRENT_PAGE = 'blog/setCurrentPage',
}

type fetchPosts = {
    type: postsActionTypes.FETCH_POSTS;
};

type fetchPostsSuccess = {
    type: postsActionTypes.FETCH_POSTS_SUCCESS;
    payload: IPost[];
};

type fetchPostSuccess = {
    type: postsActionTypes.FETCH_POST_SUCCESS;
    payload: IPost;
};

type fetchPostsError = {
    type: postsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
};

type setCurrentPage = {
    type: postsActionTypes.SET_CURRENT_PAGE;
    payload: number;
};

export type PostsActions =
    | fetchPosts
    | fetchPostsSuccess
    | fetchPostSuccess
    | fetchPostsError
    | setCurrentPage;
