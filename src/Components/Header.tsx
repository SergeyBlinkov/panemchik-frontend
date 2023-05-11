import React from 'react';
import PanemLogo from '../assets/panemchik.ru.Logos.png';
import { ButtonBase } from '@mui/material';

function Header() {
    return (
        <header className={'Header'}>
            <a href={'/'}>
                <img src={PanemLogo} alt={'Logo'} />
            </a>

            <div className={'Header_basket-profile'}>
                <ButtonBase
                    sx={{ borderRadius: '50%', width: '50px', height: '50px' }}
                    href={'/basket'}
                >
                    <i className='fa-solid fa-basket-shopping fa-2xl'></i>
                </ButtonBase>
                <ButtonBase
                    sx={{
                        border: '1px solid rgba(0,0,0,0.2)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                    }}
                    href={'/login'}
                >
                    <i className='fa-solid fa-user fa-2xl'></i>
                </ButtonBase>
            </div>
        </header>
    );
}

export default Header;
