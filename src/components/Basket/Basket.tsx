import Image from "next/image"
import Link from "next/link"
import BasketLogo from "@/public/icons/basket.svg"
import styles from "./Basket.module.scss"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Basket() {
    const cartTotal = 0;
    const cartCount = 3;
    return (
        <div className={styles.container}>
            <div className={styles.cart_operator}>
                <Image className={styles.logo} src={BasketLogo} alt=""></Image>
                <span className={styles.indicator}>{cartCount}</span>
            </div>
           <div className={styles.text_container}>
                <p className={styles.basket}>Корзина</p>
                <p className={styles.sum}>{cartTotal} ₸</p>
           </div>
        </div>
    )
}