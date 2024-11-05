import Image from "next/image"
import Link from "next/link"
import styles from "./MainLogo.module.scss"
import Logo from "@/public/icons/sultan.svg"

export default function MainLogo() {
    return (
        <Link className={styles.logo} href=""><Image src={Logo} alt=""></Image></Link>
    )
}