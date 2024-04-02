import React, { useEffect, useRef, useState } from 'react';
import { ButtonBase } from '@mui/material';
import MenuBar from '../../shared/ui/MenuBar';
import './styles/UserLogo.css';

const MenuBarItem = () => {
    return (
        <>
            <li className={'MenuBar__items'}>Список номер 1</li>
            <li className={'MenuBar__items'}>Список номер 2</li>
            <li className={'MenuBar__items'}>Список номер 3</li>
            <li className={'MenuBar__items'}>Список номер 4</li>
        </>
    );
};

const UserLogo = () => {
    const refMenu = useRef(null);
    useEffect(() => {
        const id = refMenu.current as HTMLElement | null;
        if (!id) {
            return;
        }
    }, []);

    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => setShowMenu(!showMenu);

    return (
        <div className={'UserLogo'}>
            <ButtonBase
                sx={{
                    border: '1px solid rgba(0,0,0,0.2)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                }}
                onClick={handleClick}
            >
                <i className='fa-solid fa-user fa-2xl'></i>
            </ButtonBase>
            {showMenu && (
                <section ref={refMenu}>
                    <MenuBar>
                        <MenuBarItem />
                    </MenuBar>
                </section>
            )}
        </div>
    );
};

export default UserLogo;
