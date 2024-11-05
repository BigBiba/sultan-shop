import Image from "next/image"
import Link from "next/link"
import MailLogo from "@/public/icons/mail.svg"
import styles from "./MailInfo.module.scss"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function MailInfo() {
    return (
        <div className={styles.info}>
           <Image className={styles.logo} src={MailLogo} alt="Mail"></Image>
           <div className={styles.container}>
                <Link className={styles.link} href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Link>
                <p className={styles.text}>На связи в любое время</p>
           </div>
        </div>
    )
}