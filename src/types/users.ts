export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    company: ICompany;
}

export interface IAddress {
    city: string;
    zipcode: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
}

export interface UsersState {
    loading: boolean;
    error: string;
    users: IUser[];
    user: IUser | null;
    usersPage: number;
    usersLimit: number;
}

export enum UsersActionTypes {
    FETCH_USERS = 'blog/fetchUsers',
    FETCH_USERS_SUCCESS = 'blog/fetchUsersSuccess',
    FETCH_USER_SUCCESS = 'blog/fetchUserSuccess',
    FETCH_USERS_ERROR = 'blog/fetchUsersError',
    SET_USERS_PAGE = 'blog/setUsersPage',
}

type fetchUsers = {
    type: UsersActionTypes.FETCH_USERS;
};

type fetchUsersSuccess = {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser[];
};

type fetchUserSuccess = {
    type: UsersActionTypes.FETCH_USER_SUCCESS;
    payload: IUser;
};

type fetchUsersError = {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
};

type setUsersPage = {
    type: UsersActionTypes.SET_USERS_PAGE;
    payload: number;
};

export type UsersActions =
    | fetchUsers
    | fetchUsersSuccess
    | fetchUserSuccess
    | fetchUsersError
    | setUsersPage;
