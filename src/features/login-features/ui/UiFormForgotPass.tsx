import React from 'react';
import { UiForm } from '../../../entities/Form';
import useActions from '../../../hooks/useActions';
import { InitialFormType } from '../../../entities/Form/types/FormTypes';

const init = {
    email: '',
    password: '',
};
export const UiFormForgotPass = () => {
    const { createNewUser } = useActions();
    const handleClick = (credentials: InitialFormType) => {
        console.log('Пока не реализовано');
        return;
    };
    return (
        <UiForm
            ButtonName={'Восстановление пароля'}
            handleClick={handleClick}
            initial={init}
            headName={'Восстановить'}
            showAdditionalButton={false}
            showPasswordButton={false}
            buttonBehind={true}
        />
    );
};
