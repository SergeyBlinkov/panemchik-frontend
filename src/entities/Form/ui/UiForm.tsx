import React, { useRef, useState } from 'react';

import '../style/style.css';
import { Button, TextField } from '@mui/material';
import { FormTypes, InitialFormType } from '../types/FormTypes';
import { H2 } from '../../../shared/style/SC/styled-components';
import useActions from '../../../hooks/useActions';

export const UiForm: React.FC<FormTypes> = ({
    ButtonName,
    handleClick,
    initial,
    headName,
    showAdditionalButton = true,
    showPasswordButton = true,
    buttonBehind,
}) => {
    const { setSlide } = useActions();
    const objectKeys = Object.keys(initial);
    const email = objectKeys[0];
    const password = objectKeys[1];
    const refForm = useRef(null);
    const [credentials, setCredentials] = useState<InitialFormType>(initial);
    const onClick = () => {
        handleClick(credentials);
        return;
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        return setCredentials((prev) => ({ ...prev, [name]: value }));
    };
    const onClickBehind = () => {
        const SEF = 'SwitchElementForwards';
        const id = document.getElementById('cube');
        id!.classList.replace(SEF, 'StepBack');
        return setTimeout(() => {
            id!.classList.remove('StepBack');
            setSlide(0);
        }, 1000);
    };
    const nextSlideFunction = (number: number) => {
        const id = document.getElementById('cube');
        const SEF = 'SwitchElementForwards';
        id!.classList.add(SEF);
        return setSlide(number);
    };
    return (
        <form className={'formComponent'} ref={refForm}>
            <H2>{headName}</H2>
            <section className={'formComponent_inputBlock'}>
                <TextField
                    type={email}
                    label={email}
                    name={email}
                    onChange={handleChange}
                />
                {showPasswordButton && (
                    <TextField
                        type={password}
                        label={password}
                        name={password}
                        onChange={handleChange}
                    />
                )}
            </section>
            {showAdditionalButton && (
                <section className={'formComponent_buttonBlock'}>
                    <Button
                        color={'inherit'}
                        onClick={() => nextSlideFunction(2)}
                    >
                        Забыл пароль
                    </Button>
                    <Button
                        color={'inherit'}
                        onClick={() => nextSlideFunction(1)}
                    >
                        Зарегистрироваться
                    </Button>
                </section>
            )}
            <Button
                variant={'contained'}
                onClick={() => onClick()}
                sx={{ maxWidth: 350, minWidth: 300 }}
            >
                {ButtonName}
            </Button>
            {buttonBehind && (
                <Button onClick={onClickBehind} sx={{ maxWidth: 200 }}>
                    Назад
                </Button>
            )}
        </form>
    );
};
