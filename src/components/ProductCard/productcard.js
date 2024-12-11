import { useState } from 'react';

import CartLogo from "@/public/icons/minicart.svg";
import { Button } from '../shared/Button';
import { Link } from 'next/link';

import Image from 'next/image'; // Импорт компонент Image из next/image
import styles from './ProductCard.module.scss'; // Обратите внимание на .module.scss

const ProductCard = ({ item, productUrl }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const incrementQuantity = () => {
    if (item.ml > 0 && quantity < item.ml) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));
  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

  const addToCart = () => {
    if (item.ml > 0) {
      alert(`Добавлено в корзину: ${quantity}`);
    }
  };

  const stockText = (item.ml > 0) ? <span style={{ color: 'green' }}>В наличии</span> : <span style={{ color: 'red' }}>Нет в наличии</span>;


  return (
    <div className={styles.ProductCard}>
      <div className={styles.imageContainer}>
        <Image src={item.imageId} alt={item.name} width={200} height={200} />
      </div>
      <div className={styles.description}>
        <p className={styles.stockText}>{stockText}</p>
        <h3 className={styles.productName}>{item.name}</h3>
        <div className={styles.priceContainer}> {/* Контейнер для цены, количества и корзины */}
          <p className={styles.price}>{item.price}₸</p>
          <div className={styles.quantityButtons}>
          <button className={styles.button} onClick={() => decrementQuantity()}>-</button>
        <input type="number" value={quantity} readOnly className={styles.quantityInput} />
        <button className={styles.button} onClick={() => incrementQuantity()}>+</button>
          </div>
          <Button className={styles.addToCartButton} text='В КОРЗИНУ' text_size={16} icon_src={CartLogo} icon_alt='' width={210} height={60} onClick={addToCart}/>
        </div>
        <p> Производитель: <span className={styles.boldText}>{item.manufacturer}</span></p>
        <p> Бренд: <span className={styles.boldText}>{item.brand}</span></p>
        <p> Штрих-код: <span className={styles.boldText}>{item.barcode}</span></p>
      </div>
    </div>
  );
};

export default ProductCard;