import React from 'react';
import { MenuBarType } from '../types/sharedTypes';
import '../style/SS/MenuBar.css';

//all Items should have  <li className={'MenuBar__items'}>Список номер 1</li>
// selector <li> and className={'MenuBar__items'}
const MenuBar: React.FC<MenuBarType> = ({ children }) => {
    return <ul className={'MenuBar'}>{children}</ul>;
};

export default MenuBar;
