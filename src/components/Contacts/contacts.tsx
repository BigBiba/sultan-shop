import './style.css';
import Image from 'next/image'; // Импорт компонент Image из next/image
import image from './image.png'; // Импорт изображение из той же папки

export function Contacts() {
  return (
    <div className="contact-section">
      <div className="image-container">
        <Image
          src={image} // Используем импортированное изображение
          alt="Изображение"
          layout="responsive" // Устанавливаем адаптивный размер
          width={800} // Ширина изображения
          height={600} // Высота изображения
        />
      </div>
    </div>
  );
}



 
// export function Contacts() {
//   return (
//     <div className="contact-section">
//       <h2>Контакты</h2>
//       <div className="contact-info">
//         <h3>Оптовый поставщик «Султан» </h3>
//         <p>Адрес: ул. Примерная, 1, г. Примерск, 11221</p>
//         <p>Телефон: +7 (123) 456-78-90</p>
//         <p>Email: example@example.sfedu.ru</p>
//       </div>
//       <div className="map-container">
//         <iframe
//           title="Яндекс.Карта"
//           src="https://yandex.ru/map-widget/v1/-/CDhYM2~3" 
//           width="100%"
//           height="400"
//           frameBorder="0"
//         ></iframe>
//       </div>
//     </div>
//   );
// }
