import Image from "next/image";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner"
import { Contacts } from "@/components/Contacts/contacts";
import styles from "./page.module.scss";
import PromItems from "@/components/Items/promItems";
import Categories from "@/components/Product categories/categories";
import { Footer } from "@/components/Footer/footer";
 


export default function Home() {
  return (
    <div className={styles.body}>
      <Header></Header>
      <Banner></Banner>
      <PromItems />
      <Categories />
      <Contacts />
      <Footer />
    </div>
  );
}
