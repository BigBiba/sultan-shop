import Image from "next/image"
import { Link } from "@/lib/i18n"
import MailLogo from "@/public/icons/mail.svg"
import * as m from "@/paraglide/messages.js"

import styles from "./MailInfo.module.scss"

export default function MailInfo() {
    return (
        <div className={styles.info}>
           <Image className={styles.logo} src={MailLogo} alt="Mail"></Image>
           <div className={styles.container}>
                <Link className={styles.link} href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Link>
                <p className={styles.text}>{m.main_header_mail_sub()}</p>
           </div>
        </div>
    )
}
