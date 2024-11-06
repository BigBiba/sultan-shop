import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import {Button} from "@/components/shared/Button";
import Logo from "@/public/icons/pin.svg"

export default function Home() {
  return (
    <div className={styles.body}>
      <Header></Header>
    </div>
  );
}
