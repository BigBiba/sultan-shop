import Image from "next/image";
import Header from "@/components/header";
import styles from "./page.module.css";
import { Contacts } from "@/components/Contacts/contacts";
import { Footer } from "@/components/Footer/footer";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Contacts /> 
      <Footer />
    </div>
  );
}
