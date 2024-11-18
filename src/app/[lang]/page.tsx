import Image from "next/image";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner"
import { Contacts } from "@/components/Contacts/contacts";
import styles from "./page.module.scss";
import PromItems from "@/components/Items/promItems";
import Categories from "@/components/Product categories/categories";
import { Footer } from "@/components/Footer/footer";
// import Slider from "@/components/Slider/slider"
// import Sponsor from "@/components/Sponsor/sponsor"
 


export default function Home({ params: { lang } }: { params: { lang: string } }) {
  return (
    <div className={styles.body}>
      <Header></Header>
      <Banner></Banner>
      <PromItems />
      <Categories />
      {/* <Slider />
      <Sponsor /> */}
      <Contacts />
      <Footer />
    </div>
  );
}
