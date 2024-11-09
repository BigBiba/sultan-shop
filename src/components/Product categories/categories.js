import { items } from './data.js';
import Image from 'next/image'; // Импорт компонент Image из next/image
import './styleC.scss';

export default function Categories() {
  return (
    <div>
      <strong><h2 style={{ textAlign: 'left', fontSize: '30px' }}><span style={{ color: '#FFBF00' }}>Категории</span> товаров</h2></strong>
      <div style={{ color: 'gray' }}>10000+ ходовых позиций по специальным ценам</div>
      <div className="itemC-container">
        {items.map(itemC => (
          <div className="itemC" key={itemC.id}>
            <Image
              src={itemC.imageId} // Используем путь из items
              alt={itemC.name} // Используем название товара для alt
              layout="responsive" // Устанавливаем адаптивный размер
              width={100} // Ширина изображения
              height={100} // Высота изображения
            />

            <div className="itemC-name">
              <strong>{itemC.name}</strong> {/* Первое слово жирным */}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
