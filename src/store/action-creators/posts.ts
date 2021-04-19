import { Dispatch } from 'react';
import { IPost, PostsActions, postsActionTypes } from '~/types/posts';
import axios from 'axios';

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({ type: postsActionTypes.FETCH_POSTS });

        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await axios.get(url);
            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostsError(e));
        }
    };
};

export const fetchPost = (id: number) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({ type: postsActionTypes.FETCH_POSTS });
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await axios.get(url);
            dispatch(fetchPostSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostsError(e));
        }
    };
};

export const setCurrentPage = (payload: number): PostsActions => {
    return { type: postsActionTypes.SET_CURRENT_PAGE, payload };
};

export const fetchPostsSuccess = (payload: IPost[]): PostsActions => {
    return { type: postsActionTypes.FETCH_POSTS_SUCCESS, payload };
};

export const fetchPostSuccess = (payload: IPost): PostsActions => {
    return { type: postsActionTypes.FETCH_POST_SUCCESS, payload };
};

export const fetchPostsError = (payload: string): PostsActions => {
    return { type: postsActionTypes.FETCH_POSTS_ERROR, payload };
};
