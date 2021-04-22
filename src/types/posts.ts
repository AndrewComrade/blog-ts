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
    postsPage: number;
    postsLimit: number;
}

export enum PostsActionTypes {
    FETCH_POSTS = 'blog/fetchPosts',
    FETCH_POSTS_SUCCESS = 'blog/fetchPostsSuccess',
    FETCH_POST_SUCCESS = 'blog/fetchPostSuccess',
    FETCH_POSTS_ERROR = 'blog/fetchPostsError',
    SET_POSTS_PAGE = 'blog/setPostsPage',
}

type fetchPosts = {
    type: PostsActionTypes.FETCH_POSTS;
};

type fetchPostsSuccess = {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: IPost[];
};

type fetchPostSuccess = {
    type: PostsActionTypes.FETCH_POST_SUCCESS;
    payload: IPost;
};

type fetchPostsError = {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
};

type setPostsPage = {
    type: PostsActionTypes.SET_POSTS_PAGE;
    payload: number;
};

export type PostsActions =
    | fetchPosts
    | fetchPostsSuccess
    | fetchPostSuccess
    | fetchPostsError
    | setPostsPage;
