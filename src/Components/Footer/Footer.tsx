import React from 'react';
import './Footer.css';
import MailMessageImg from './assets/message.svg';
import ChatMessageImg from './assets/Chat Message.svg';
import SecurityImg from './assets/Security.svg';
import CalendarImg from './assets/Calendar.svg';
import TimeImg from "./assets/Time.svg";

function Footer() {
    return (
        <footer className={'footer'}>
            <ul className={'footer_links'}>
                <li className={'footer_links__item'}>Service</li>
                <li className={'footer_links__item'}>Support</li>
                <li className={'footer_links__item'}>Company</li>
                <li className={'footer_links__item'}>Legal</li>
                <li className={'footer_links__item'}>Join Us</li>
            </ul>
            <ul className={'footer_logos'}>
               <li className={'footer_logos__item'}><img width={24} height={24} src={MailMessageImg} alt={'MailMessage'} /></li>
               <li className={'footer_logos__item'}><img width={24} height={24} src={ChatMessageImg} alt={'ChatMessage'}  /></li>
               <li className={'footer_logos__item'}><img width={24} height={24} src={SecurityImg} alt={'Security'}  /></li>
               <li className={'footer_logos__item'}><img width={24} height={24} src={CalendarImg} alt={'Calendar'}  /></li>
               <li className={'footer_logos__item'}><img width={24} height={24} src={TimeImg} alt={'Time'} /></li>
            </ul>
            <p className={'footer_text'}>Design with love © TanahAirStudio 2020. All right reserved</p>
        </footer>
    );
}

export default Footer;