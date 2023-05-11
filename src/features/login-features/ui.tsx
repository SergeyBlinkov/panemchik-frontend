import React from 'react';
import './style/login-features.css';
import LogoAnimate from '../../shared/ui/LogoAnimate';
import { BackgroundGradient } from '../../shared/style/SC/styled-components';
import { UiFormLogin } from './ui/UiFormLogin';
import { UiFormRegistration } from './ui/UiFormRegistration';
import { UiFormForgotPass } from './ui/UiFormForgotPass';
import { useAppSelector } from '../../app/store/ReduxStore';
import { Cube } from '../../shared/indexShared';

const NodeArray: Array<JSX.Element> = [
    <UiFormLogin />,
    <UiFormRegistration />,
    <UiFormForgotPass />,
];
export const Ui_Features = () => {
    const { slide } = useAppSelector((state) => state.loginReducer);

    return (
        <BackgroundGradient>
            <div className={'UiFormChanger'}>
                <Cube
                    isSwitch={true}
                    firstChildren={NodeArray[0]}
                    secondChildren={NodeArray[slide]}
                    type={'forwards'}
                    isLoading={true}
                />
            </div>

            <LogoAnimate />
        </BackgroundGradient>
    );
};
