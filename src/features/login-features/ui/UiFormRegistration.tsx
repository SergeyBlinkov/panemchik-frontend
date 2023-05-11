import React from 'react';
import { UiForm } from '../../../entities/Form';
import useActions from '../../../hooks/useActions';
import { InitialFormType } from '../../../entities/Form/types/FormTypes';

const init = {
    email: '',
    password: '',
};
export const UiFormRegistration = () => {
    const { createNewUser, setSlide } = useActions();

    const handleClick = (credentials: InitialFormType) => {
        createNewUser(credentials as any);
        return;
    };
    return (
        <UiForm
            ButtonName={'Зарегистроваться'}
            handleClick={handleClick}
            initial={init}
            showAdditionalButton={false}
            headName={'Регистрация аккаунта'}
            buttonBehind={true}
        />
    );
};
