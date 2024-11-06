import Image from "next/image";
import Header from "@/components/Header/Header";
import { Contacts } from "@/components/Contacts/contacts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.body}>
      <Header></Header>
      <Contacts /> 
    </div>
  );
}
