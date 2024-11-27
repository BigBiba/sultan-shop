import Image from "next/image"
import styles from "./Banner.module.scss"
import BannerImage from "@/public/images/banner.png"
import { Button } from "../shared/Button"

export default function Banner() {
    return (
        <section className={styles.container}>

            <Image className={styles.image} src={BannerImage} alt=""></Image>
            <div className={styles.info}>
                <div className={styles.all_text}>
                    <h1 className={styles.text1}>Бытовая химия, косметика и хозтовары</p>

                    <p className={styles.text2}>оптом по кокчетаву и области</p>
                    <Button text="В КАТАЛОГ" icon_src="" icon_alt="" width={300} height={95}></Button>
                    <div className={styles.pluses_container}>
                        <span className={styles.plus}>+</span>
                        <div className={styles.plus1}>Только самые выгодные предложения</div>
                        <span className={styles.plus}>+</span>
                        <div className={styles.plus2}>
                          Бесплатная доставка<br />
                          по <span>Кокчетаву от 10 тыс ₸</span>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}
