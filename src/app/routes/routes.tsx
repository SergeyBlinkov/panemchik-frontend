import { ADMIN_PANEL, BASKET, ITEM, LOGIN, USER_PROFILE } from './utils';
import Basket from '../../Components/Basket/Basket';
import LoginPage from '../../pages/login-page/LoginPage';
import ItemPage from '#/pages/ItemPage/ui/ItemPage';

interface PathComponent {
    path: string;
    component: JSX.Element;
}

export const publicRoutes: PathComponent[] = [
    {
        path: BASKET,
        component: <Basket />,
    },
    {
        path: LOGIN,
        component: <LoginPage />,
    },
    {path:ITEM,component:<ItemPage />}
];

export const userRoutes = [
    {
        path: USER_PROFILE,
        component: '',
    },
];

export const adminRoutes = [
    {
        path: ADMIN_PANEL,
        component: '',
    },
];
