import Image from "next/image";
import styles from "./Button.module.scss"

interface ButtonInterface {
    text: string;
    icon_src: string;
    icon_alt: string;
}

export function Button({text, icon_src, icon_alt}: ButtonInterface) {
    return (
        <button className={styles.button}>
            <Image src={icon_src} alt={icon_alt}></Image>
            {text}
        </button>
    )
}