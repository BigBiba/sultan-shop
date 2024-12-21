import Image from "next/image";
import styles from "./Button.module.scss";

interface ButtonInterface {
  text: string;
  text_size?: number;
  icon_src?: string;
  icon_alt?: string;
  width?: number;
  height?: number;
}

export function Button({
  text,
  text_size,
  icon_src = "",
  icon_alt = "",
  width,
  height,
}: ButtonInterface) {
  return (
    <button
      className={styles.button}
      style={{ width: width, height: height, fontSize: text_size }}
    >
      <Image className={styles.logo} src={icon_src} alt={icon_alt}></Image>
      {text}
    </button>
  );
}
