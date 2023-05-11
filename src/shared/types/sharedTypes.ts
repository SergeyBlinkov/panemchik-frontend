import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CubeType {
    firstChildren: JSX.Element;
    secondChildren: JSX.Element;
    isSwitch: boolean;
    type: 'infinite' | 'forwards' | 'none' | 'user';
    isLoading?: boolean;
}

export interface MenuBarType {
    children: JSX.Element | JSX.Element[];
}
