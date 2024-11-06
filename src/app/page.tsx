import Image from "next/image";
import Header from "@/components/Header/Header";
import { Contacts } from "@/components/Contacts/contacts";
import styles from "./page.module.scss";
import PromItems from "@/components/Items/promItems";
import Categories from "@/components/Product categories/categories";

export default function Home() {
  return (
    <div className={styles.body}>
      <Header></Header>
      <PromItems />
      <Categories />
      <Contacts />
    </div>
  );
}
