import Image from "next/image";
import styles from "./Button.module.scss"

interface ButtonInterface {
    text: string;
    icon_src: string;
    icon_alt: string;
    width?: number;
    height?: number;
}



export function Button({text, icon_src, icon_alt, width, height}: ButtonInterface) {
    return (
        <button className={styles.button} style={{width: width, height: height}}>
            <Image className={styles.logo} src={icon_src} alt={icon_alt}></Image>
            {text}
        </button>
    )
}