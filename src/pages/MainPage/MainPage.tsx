import React from 'react';
<<<<<<< HEAD
import { BackgroundGradient2 } from '../../shared/style/SC/styled-components';
import HeaderMenu from '../../entities/HeaderMenu/ui/HeaderMenu';

const MainPage = () => {
    return (
        <BackgroundGradient2>
            <HeaderMenu />
        </BackgroundGradient2>
=======
import HeaderMenu from '#/entities/HeaderMenu/ui/HeaderMenu';
import NewsBlock from "#/Components/NewsBlock/NewsBlock";
import ItemBlock from "#/Components/ItemBlock/ItemBlock";
import './MainPage.css';
import Footer from "#/Components/Footer/Footer";

const MainPage = () => {
    return (<div className={'MainPage'}>
            <HeaderMenu />
            <NewsBlock />
            <main className={'MainPage-Items'}>
                <h3 className={'MainPage-Items_h'}>
                    Все наши кондитерские изделия
                </h3>
                <ItemBlock />
            </main>

            <Footer />
    </div>

>>>>>>> master
    );
};

export default MainPage;
