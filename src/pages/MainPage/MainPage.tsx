import React from 'react';
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

    );
};

export default MainPage;
