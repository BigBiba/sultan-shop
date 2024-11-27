import Image from "next/image"
import { Link } from "@/lib/i18n"
import BasketLogo from "@/public/icons/basket.svg"
import styles from "./Basket.module.scss"
import * as m from "@/paraglide/messages.js"

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
                <p className={styles.basket}>{m.main_header_basket()}</p>
                <p className={styles.sum}>{cartTotal} ₸</p>
           </div>
        </div>
    )
}
