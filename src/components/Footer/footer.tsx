import './Footer.css'; 
import Image from 'next/image'; 
import sultanLogo from './sultan.png';
import visaLogo from './visa.png'; 
import mastercardLogo from './mastercard.png'; 
import whatsappLogo from './whatsapp.png'; 
import telegramLogo from './telegram.png'; 
import DownloadLogo from "@/public/icons/download.svg"
import { Button } from '../shared/Button';

export function Footer () {
    return (
        <footer className="footer">
            <div className="footer-section">
                <Image
                    src={sultanLogo} 
                    alt="Логотип Султан" 
                    width="156" 
                    height="66" 
                />
                <p className="company-description">
                    Компания «Султан» — снабжаем розничные магазины товарами 
                    "под ключ" в Кокчетаве и Акмолинской области
                </p>
                <p className="subscribe-text">
                    Подпишись на скидки и акции
                </p>
            </div>
            <div className="footer-section">
                <h3>Меню сайта:</h3>
                <ul>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Доставка и оплата</a></li>
                    <li><a href="#">Возврат</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Категории:</h3>
                <ul>
                    <li><a href="#">Бытовая химия</a></li>
                    <li><a href="#">Косметика и гигиена</a></li>
                    <li><a href="#">Товары для дома</a></li>
                    <li><a href="#">Товары для детей и мам</a></li>
                    <li><a href="#">Посуда</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Скачать прайс-лист:</h3>
                <Button text='Прайс-лист' icon_src={DownloadLogo} icon_alt='' width={214} height={59}></Button>
                <p className="messenger-info">Связь в мессенджерах:</p>
                {/* Уменьшили отступ между строкой и иконками до 2px */}
                <div className="messenger-logos" style={{ marginTop: '2px', display: 'flex', gap: '10px' }}>
                    <Image 
                        src={whatsappLogo} 
                        alt="WhatsApp" 
                        width="27" 
                        height="27" 
                    />
                    <Image 
                        src={telegramLogo} 
                        alt="Telegram" 
                        width="27" 
                        height="27" 
                    />
                </div>
            </div>
            <div className="footer-section">
                <h3>Контакты:</h3>
                <p className="contact-phone header-text">+7 (777) 490-00-91</p>
                <p className="contact-hours header-text">время работы: 9:00-20:00</p>
                <p className="call-request header-text">Заказать звонок</p>
                <div className="contact-info">
                    <p className="contact-email header-text">opt.sultan@mail.ru</p>
                    <p className="contact-availability">На связи в любое время</p>
                </div>
                <div className="payment-logos" style={{ marginTop: '10px' }}>
                    <Image 
                        src={visaLogo} 
                        alt="Visa" 
                        width="61" 
                        height="39" 
                        className="payment-logo" 
                    />
                    <Image 
                        src={mastercardLogo} 
                        alt="Mastercard" 
                        width="61" 
                        height="39" 
                        className="payment-logo" 
                    />
                </div>
            </div>
        </footer>
    );
}