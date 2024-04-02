import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { userAuthCheck } from '../store/ApiThunkCalls';
import { useAppDispatch, useAppSelector } from '../store/ReduxStore';
import MainPage from '../../pages/MainPage/MainPage';

const MainRouter = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userAuthCheck());
    }, []);
    const userInfo = useAppSelector((state) => state.userReducer);
    console.log(userInfo);
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                ))}
                <Route path={'*'} element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;
