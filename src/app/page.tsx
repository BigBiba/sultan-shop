import Image from "next/image";
import Header from "@/components/header";
import styles from "./page.module.css";
import { Contacts } from "@/components/Contacts/contacts";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Contacts /> 
    </div>
  );
}
