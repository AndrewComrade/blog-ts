import HomePage from '~/pages/HomePage';
import PostPage from '~/pages/PostPage';
import UserPage from '~/pages/UserPage';

export enum RouteNames {
    HOME_ROUTE = '/',
    USER_ROUTE = '/user',
    POST_ROUTE = '/post',
}

export const routes = [
    {
        path: RouteNames.HOME_ROUTE,
        component: HomePage,
    },
    {
        path: RouteNames.USER_ROUTE + '/:id',
        component: UserPage,
    },
    {
        path: RouteNames.POST_ROUTE + '/:id',
        component: PostPage,
    },
];
