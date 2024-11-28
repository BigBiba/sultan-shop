import Image from 'next/image'; 
import image from './image.png'; 
import map from './map.png'; 
import doc from './doc.png'; 
import './contacts.scss';

export function Contacts() {
  return (
    <div className="container">
      <div className="image-container">
        <Image
          src={image} 
          alt="Изображение"
          layout="responsive" 
          width={800} 
          height={600} 
          className="mapImage"
        />
      </div>
      <div className="overlay">
        <h2>Контакты</h2>
        <h4>Оптовый поставщик «Султан»</h4>
        <div className="contactInfo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
          <div className="iconText" style={{ flex: 1, marginRight: '24px', display: 'flex', alignItems: 'center' }}>
            <Image
              src={map} 
              alt="Icon"
              layout="fixed" 
              width={20} 
              height={20}
              className="icon"
            />
            <div>
              <h3>Адрес:</h3>
              <p>
                г. Кокшетау, ул. Ж. Ташенова 129Б
                <br />
                (Рынок Восточный)
              </p>
            </div>
          </div>
          <div className="sale" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ marginBottom: '8px' }}>Отдел продаж:</h3>
            <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '18.2px', color: 'var(--blue)' }}>
              +7 (777) 490-00-91
              <br />
              opt.sultan@mail.ru
            </p>
          </div>
        </div>
        <div className="iconText" style={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
          <Image
            src={doc} 
            alt="Icon"
            layout="fixed" 
            width={20} 
            height={20}
            className="icon"
          />
          <div>
            <h3>Данные налогоплательщика:</h3>
            <p>
              ИП Катран Д.С.
              <br />
              ИНН: 860113450858
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
