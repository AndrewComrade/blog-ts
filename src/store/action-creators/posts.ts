import { Dispatch } from 'react';
import { IPost, PostsActions, PostsActionTypes } from '~/types/posts';
import axios from 'axios';

export const fetchPosts = (userId: string) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({ type: PostsActionTypes.FETCH_POSTS });
        try {
            const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
            const response = await axios.get<IPost[]>(url);
            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostsError(e.message));
        }
    };
};

export const fetchPost = (id: string) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({ type: PostsActionTypes.FETCH_POSTS });
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await axios.get(url);
            dispatch(fetchPostSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostsError(e.message));
        }
    };
};

export const setPostsPage = (payload: number): PostsActions => {
    return { type: PostsActionTypes.SET_POSTS_PAGE, payload };
};

export const fetchPostsSuccess = (payload: IPost[]): PostsActions => {
    return { type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload };
};

export const fetchPostSuccess = (payload: IPost): PostsActions => {
    return { type: PostsActionTypes.FETCH_POST_SUCCESS, payload };
};

export const fetchPostsError = (payload: string): PostsActions => {
    return { type: PostsActionTypes.FETCH_POSTS_ERROR, payload };
};
