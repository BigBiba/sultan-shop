import Image from "next/image"
import { Link } from "@/lib/i18n"
import Logo from "@/public/icons/sultan.svg"

import styles from "./MainLogo.module.scss"

export default function MainLogo() {
    return (
        <Link className={styles.logo} href=""><Image src={Logo} alt=""></Image></Link>
    )
}
