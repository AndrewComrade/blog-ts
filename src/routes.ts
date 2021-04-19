import HomePage from './pages/HomePage';
import PostPage from "~/pages/PostPage";

export enum RouteNames {
    HOME_ROUTE = '/',
    POST_ROUTE = '/post',
}

export const routes = [
    {
        path: RouteNames.HOME_ROUTE,
        component: HomePage,
    },
    {
        path: RouteNames.POST_ROUTE + '/:id',
        component: PostPage,
    },
];
