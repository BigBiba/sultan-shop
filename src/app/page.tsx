import Image from "next/image";
import Header from "@/components/header";
import styles from "./page.module.css";
import { Contacts } from "@/components/Contacts/contacts";
import PromItems from "@/components/Items/promItems";
import Categories from "@/components/Product categories/categories";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <PromItems />
      <Categories />
      <Contacts />
    </div>
  );
}
