import { items } from './data.js';
import Image from 'next/image'; // Импорт компонент Image из next/image
import './style.css';

export default function PromItems() {
  return (
    <div>
      <strong><h1 style={{ textAlign: 'left' }}><span style={{ color: '#FFBF00' }}>Акционные</span> товары</h1></strong>
      <div className="item-container">
        {items.map(item => (
          <div className="item" key={item.id}>
            <Image
              src={item.imageId} // Используем путь из items
              alt={item.name} // Используем название товара для alt
              layout="responsive" // Устанавливаем адаптивный размер
              width={100} // Ширина изображения
              height={100} // Высота изображения
            />
            <div className="label">Популярное</div>
            <div className = 'item-ml'>{item.ml} мл</div> {/* Добавляем надпись 450 мл */}
            <div className="item-name">
              <strong>{item.name.split(' ')[0]}</strong> {/* Первое слово жирным */}
              {item.name.split(' ').slice(1).join(' ')} {/* Остальные слова */}
            </div>

            <div className="spacer"></div>
            <div className="item-details">
              Штрихкод: <span className="item-barcode">{item.barcode}</span> {/* Штрихкод */}
            </div>
            <div className="item-details">
              Производитель: <span className="item-manufacturer">{item.manufacturer}</span> {/* Производитель */}
            </div> 
            <div className="item-details">
            Бренд: <span className="item-brand">{item.brand}</span> {/* Бренд */}
            </div>

            <div className="spacer"></div>
            <div className='item-price'>{item.price} ₸</div>
            
          </div>
        ))}
      </div>

      <div className="item-container">
        {items.map(item => (
          <div className="item" key={item.id}>
            <Image
              src={item.imageId} // Используем путь из items
              alt={item.name} // Используем название товара для alt
              layout="responsive" // Устанавливаем адаптивный размер
              width={100} // Ширина изображения
              height={100} // Высота изображения
            />
            <div className="label">Популярное</div>
            <div className = 'item-ml'>{item.ml} мл</div> {/* Добавляем надпись 450 мл */}
            <div className="item-name">
              <strong>{item.name.split(' ')[0]}</strong> {/* Первое слово жирным */}
              {item.name.split(' ').slice(1).join(' ')} {/* Остальные слова */}
            </div>

            <div className="spacer"></div>
            <div className="item-details">
              Штрихкод: <span className="item-barcode">{item.barcode}</span> {/* Штрихкод */}
            </div>
            <div className="item-details">
              Производитель: <span className="item-manufacturer">{item.manufacturer}</span> {/* Производитель */}
            </div> 
            <div className="item-details">
            Бренд: <span className="item-brand">{item.brand}</span> {/* Бренд */}
            </div>

            <div className="spacer"></div>
            <div className='item-price'>{item.price} ₸</div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
