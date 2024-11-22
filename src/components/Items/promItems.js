import { items } from './data.js';
import Image from 'next/image'; // Импорт компонент Image из next/image
import './style.scss';
import CartLogo from "@/public/icons/minicart.svg"
import { Button } from '../shared/Button';
import { Link } from 'next/link';

export default function PromItems() {
  return (
    <div>
      
      <strong><h2 style={{ textAlign: 'left', fontSize: '30px' }}><span style={{ color: '#FFBF00' }}>Акционные</span> товары</h2></strong>
      <div className="item-container">
      {items.map(item => (
        <Link key={item.id} href={`/${item.id}`}>
          <a>
            <article className="item" key={item.id}>
              <Image
                src={item.imageId}
                alt={item.name}
                layout="responsive"
                width={100}
                height={100}
              />
              <div className="label">Популярное</div>
              <div className="item-ml">{item.ml} мл</div>
              <div className="item-name">
                <strong>{item.name.split(' ')[0]}</strong>
                {item.name.split(' ').slice(1).join(' ')}
              </div>
              <div className="item-details">
                Штрихкод: <span className="item-barcode">{item.barcode}</span>
              </div>
              <div className="item-details">
                Производитель: <span className="item-manufacturer">{item.manufacturer}</span>
              </div>
              <div className="item-details">
                Бренд: <span className="item-brand">{item.brand}</span>
              </div>
              <div className="item-price">{item.price} ₸</div>
              <Button text='В КОРЗИНУ' text_size={10} icon_src={CartLogo} icon_alt='' width={153} height={45}></Button>
            </article>
          </a>
        </Link>
      ))}      
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
            <Button text='В КОРЗИНУ' text_size={10} icon_src={CartLogo} icon_alt='' width={153} height={45}></Button>
          </div>
        ))}
      </div>
    </div>
  );
}
