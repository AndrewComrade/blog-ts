import * as PostsActions from '~/store/action-creators/posts';
import * as UsersActions from '~/store/action-creators/users';

const ActionCreators = {
    ...PostsActions,
    ...UsersActions,
};

export default ActionCreators;
