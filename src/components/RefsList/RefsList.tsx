import Link from "next/link"
import styles from "./RefsList.module.scss"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function RefsList() {
    return (
        <div>
           <ul className={styles.list}>
                <li><Link className={styles.link} href="">О компании</Link></li>
                <li><Link className={styles.link} href="">Доставка и оплата</Link></li>
                <li><Link className={styles.link} href="">Возврат</Link></li>
                <li><Link className={styles.link} href="">Контакты</Link></li>
           </ul>
        </div>
    )
}