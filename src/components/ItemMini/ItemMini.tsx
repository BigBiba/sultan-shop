import Image from 'next/image'; // Импорт компонент Image из next/image
import styles from "./ItemMini.module.scss";
import CartLogo from "@/public/icons/minicart.svg"
import { Button } from '../shared/Button';
import { Link } from "@/lib/i18n";
import { Item } from "@/public/models/Item";

export default function ItemMini({ item }: { item: Item }) {
    return (
        <Link href={`/product-card/${item.id}`} className={styles.link}>
            <div className={styles.item} key={item.id}>
                <Image
                    src={item.imageId || '/default-image.png'} 
                    alt={item.shortNameRu || 'Товар'}
                    layout="responsive"
                    width={100}
                    height={100}
                />
                
                <div className={styles.item_ml}>{item.size} {item.sizeType}</div>
                
                <span className={styles.item_name}>
                    <strong>{item.brand.split(' ')[0]}</strong> {item.nameRu}
                </span>
                
                <div className={styles.item_details} style={{ marginTop: '30px' }}> 
                    Штрихкод: <span className={styles.item_barcode}>{item.barcode}</span>
                </div>
                
                <div className={styles.item_details}>
                    Производитель: <span className={styles.item_manufacturer}>{item.manufacturer}</span>
                </div>

                <div className={styles.item_details}>
                    Бренд: <span className={styles.item_brand}>{item.brand}</span>
                </div>
                <div className={styles.item_price_button_container}>
                <div className={styles.item_price}>{item.price} ₸</div>
                    <Button
                        text="В КОРЗИНУ"
                        text_size={10}
                        icon_src={CartLogo}
                        icon_alt="Корзина"
                        width={153}
                        height={45}
                    />
                </div>
            </div>
        </Link>
    );
};

