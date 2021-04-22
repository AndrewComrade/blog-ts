import { Dispatch } from 'react';
import { IUser, UsersActions, UsersActionTypes } from '~/types/users';
import axios from 'axios';

export const fetchUsers = (limit: number, page: number) => {
    return async (dispatch: Dispatch<UsersActions>) => {
        dispatch({ type: UsersActionTypes.FETCH_USERS });
        try {
            const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`;
            const response = await axios.get<IUser[]>(url);
            dispatch(fetchUsersSuccess(response.data));
        } catch (e) {
            dispatch(fetchUsersError(e.message));
        }
    };
};

export const fetchUser = (id: string) => {
    return async (dispatch: Dispatch<UsersActions>) => {
        dispatch({ type: UsersActionTypes.FETCH_USERS });
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${id}`;
            const response = await axios.get<IUser>(url);
            dispatch(fetchUserSuccess(response.data));
        } catch (e) {
            dispatch(fetchUsersError(e.message));
        }
    };
};

export const setUsersPage = (payload: number): UsersActions => {
    return { type: UsersActionTypes.SET_USERS_PAGE, payload };
};

export const fetchUsersSuccess = (payload: IUser[]): UsersActions => {
    return { type: UsersActionTypes.FETCH_USERS_SUCCESS, payload };
};

export const fetchUserSuccess = (payload: IUser): UsersActions => {
    return { type: UsersActionTypes.FETCH_USER_SUCCESS, payload };
};

export const fetchUsersError = (payload: string): UsersActions => {
    return { type: UsersActionTypes.FETCH_USERS_ERROR, payload };
};
