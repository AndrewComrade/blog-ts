import { UsersActions, UsersActionTypes, UsersState } from '~/types/users';

const initialState: UsersState = {
    users: [],
    loading: false,
    error: '',
    user: null,
    usersLimit: 3,
    usersPage: 1,
};

const usersReducer = (state = initialState, action: UsersActions) => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return { ...state, loading: false };
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, users: action.payload };
        case UsersActionTypes.FETCH_USER_SUCCESS:
            return { ...state, user: action.payload };
        case UsersActionTypes.FETCH_USERS_ERROR:
            return { ...state, error: action.payload };
        case UsersActionTypes.SET_USERS_PAGE:
            return { ...state, usersPage: action.payload };
        default:
            return state;
    }
};

export default usersReducer;
