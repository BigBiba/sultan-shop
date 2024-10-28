import Image from "next/image"
import PinLogo from "@/public/icons/pin.svg"
import styles from "./AddressInfo.module.scss"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function AddressInfo() {
    return (
        <div className={styles.info}>
           <Image src={PinLogo} alt="Pin"></Image>
           <p>
            <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
            <br/>(Рынок Восточный)
            </p>
        </div>
    )
}