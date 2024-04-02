import React from 'react';
import { UiForm } from '../../../entities/Form';
import useActions from '../../../hooks/useActions';
import { InitialFormType } from '../../../entities/Form/types/FormTypes';

const init = {
    email: '',
    password: '',
};
export const UiFormLogin = () => {
    const { loginUserThunk } = useActions();

    const handleClick = (credentials: InitialFormType) => {
        const { email, password } = credentials;
        if (password) {
            loginUserThunk(credentials as any);
            return;
        } else {
        }
    };
    return (
        <UiForm
            ButtonName={'Авторизоваться'}
            handleClick={handleClick}
            initial={init}
            headName={'Авторизоваться'}
        />
    );
};
