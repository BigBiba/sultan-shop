import Image from "next/image"
import Link from "next/link"
import WomanPNG from "@/public/icons/woman.png"
import styles from "./PhoneInfo.module.scss"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function PhoneInfo() {
    return (
        <div className={styles.info}>
            <div className={styles.container}>
                <p className={styles.phone}>+7 (777) 490-00-91</p>
                <p className={styles.time}>время работы: 9:00-20:00</p>
                <Link className={styles.link} href="tel:+7 (777) 490-00-91">Заказать звонок</Link>
           </div>
           <div className={styles.image_operator}>
                <Image className={styles.image} src={WomanPNG} alt="" width={74} height={113}></Image>
                <span className={styles.indicator}></span>
           </div>
        </div>
    )
}