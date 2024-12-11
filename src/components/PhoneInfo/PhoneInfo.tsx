import Image from "next/image"
import { Link } from "@/lib/i18n"
import WomanPNG from "@/public/icons/woman.png"
import * as m from "@/paraglide/messages.js"

import styles from "./PhoneInfo.module.scss"

export default function PhoneInfo() {
    return (
        <div className={styles.info}>
            <div className={styles.container}>
                <p className={styles.phone}>+7 (777) 490-00-91</p>
                <p className={styles.time}>{m.main_header_phone_time()}: 9:00-20:00</p>
                <Link className={styles.link} href="tel:+7 (777) 490-00-91">{m.main_header_phone_request()}</Link>
           </div>
           <div className={styles.image_operator}>
                <Image className={styles.image} src={WomanPNG} alt="" width={74} height={113}></Image>
                <span className={styles.indicator}></span>
           </div>
        </div>
    )
}
