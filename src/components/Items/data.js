import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

// Export const items
export const items = [
  {
    id: 0,
    ml: '450',
    imageId: image1,
    name: 'SORTI Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
  {
    id: 1,
    ml: '450',
    imageId: image2,
    name: 'AOS Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
  {
    id: 2,
    ml: '450',
    imageId: image3,
    name: 'ARIEL Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
  {
    id: 3,
    ml: '450',
    imageId: image4,
    name: 'BIMAX Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
];

const Item = ({ item }) => {
  return (
    <div>
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
    </div>
  );
};

export async function getStaticPaths() {
  const paths = items.map(item => ({ params: { id: item.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = items.find(i => i.id === +params.id);
  return { props: { item } };
}

export default Item;