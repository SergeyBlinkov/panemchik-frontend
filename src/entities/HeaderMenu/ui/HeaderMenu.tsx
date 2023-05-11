import React from 'react';
import { ButtonBase } from '@mui/material';
import '../style/HeaderMenu.css';
import LogoConveyor from '../../../shared/ui/LogoConveyor';
import UserLogo from '../../UserLogo/UserLogo';

const HeaderMenu = () => {
    return (
        <header className={'Header'}>
            <LogoConveyor />

            <div className={'Header_basket-profile'}>
                <ButtonBase
                    sx={{ borderRadius: '50%', width: '50px', height: '50px' }}
                    href={'/basket'}
                >
                    <i className='fa-solid fa-basket-shopping fa-2xl'></i>
                </ButtonBase>
                <UserLogo />
            </div>
        </header>
    );
};

export default HeaderMenu;
