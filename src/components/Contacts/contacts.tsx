import './contacts.css';
import Image from 'next/image'; // Импорт компонент Image из next/image
import image from './image.png'; // Импорт изображение из той же папки


export function Contacts() {
  return (
    <div className="contact-section">
      <div className="image-container">
        <div className="blur-overlay">
          <h2>Контакты</h2>
          <div className="contact-info">
            <h3>Оптовый поставщик «Султан»</h3>
            <p>Адрес: г. Кокшетау, ул. Ж. Ташенова 129Б (Рынок Восточный)</p>
            <p>Отдел продаж: +7 (777) 490-00-91</p>
            <p>Email: opt.sultan@mail.ru</p>
            <p>Данные налогоплательщика:</p>
            <p>ИП Катран Д.С.</p>
            <p>ИНН: 860113450858</p>
          </div>
        </div>
      </div>
    </div>
  );
}