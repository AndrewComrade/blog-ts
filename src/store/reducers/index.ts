import { combineReducers } from 'redux';
import postsReducer from '~/store/reducers/postsReducer';
import usersReducer from '~/store/reducers/usersReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
});

export default rootReducer;
