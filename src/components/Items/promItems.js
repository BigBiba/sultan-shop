import { items } from "@/public/data/items";
import Image from 'next/image'; // Импорт компонент Image из next/image
import './style.scss';
import CartLogo from "@/public/icons/minicart.svg"
import { Button } from '../shared/Button';
import { Link } from "@/lib/i18n";

export default function PromItems() {
  return (
    <div>
      <h2 style={{ textAlign: 'left', fontSize: '30px' }}><span style={{ color: '#FFBF00' }}>Акционные</span> товары</h2>
      <div className="item-container">
      {items.slice(0, 4).map(item => (
        <Link href={`/product-card/${item.id}`} className='link'>
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
              <text href={`/product-card/${item.id}`} className="item-name">
                <strong>{item.nameRu.split(' ')[0]}</strong>
                {item.nameRu}
              </text>
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
        </Link>
      ))}      
      </div>
    </div>
  );
}
