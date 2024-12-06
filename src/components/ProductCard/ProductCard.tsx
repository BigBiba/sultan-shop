import Image from "next/image"

import BoxLogo from "@/public/icons/box.svg"
import BasketLogo from "@/public/icons/basket.svg"
import ShareLogo from "@/public/icons/share.svg"
import DownloadLogo from "@/public/icons/download.svg"
import { Item } from "@/public/models/Item";
import BasketCounter from "@/components/BasketCounter/BasketCounter"
import { Button } from "../shared/Button";
import * as m from "@/paraglide/messages.js"

import styles from "./ProductCard.module.scss"

export default function ProductCard({item}: { item: Item}) {
    const details = [
        { label: m.product_info_manufacturer(), value: item.manufacturer },
        { label: m.product_info_brand(), value: item.brand },
        { label: m.product_info_article(), value: item.article },
        { label: m.product_info_amount(), value: item.amount },
        { label: m.product_info_barcode(), value: item.barcode },
      ];
    return (
        <div className={styles.product_card}>
            <Image
            src={item.imageId}
            alt=''></Image>
            <div className={styles.info}>
                <span className={styles.having}>{m.product_info_having()}</span>
                <div className={styles.names}>
                    {item.brand}
                    <span> </span>
                    {item.shortNameRu}
                    <span> </span>
                    <span className={styles.full_name}>{item.nameRu}</span>
                </div>
                <div className={styles.size}>
                    <Image src={BoxLogo}
                            alt=""></Image>
                    {item.size} {item.sizeType}
                </div>
                <div className={styles.basket}>
                    <span className={styles.price}>{item.price} ₸</span>
                    <BasketCounter></BasketCounter>
                    <Button text={m.product_info_basket()}
                            text_size={14}
                            icon_src={BasketLogo}
                            width={184}
                            height={60}></Button>
                </div>
                <div className={styles.price_list_container}>
                    <button className={styles.share}><Image src={ShareLogo}
                                                            alt=""></Image></button>
                    <div className={styles.delivery}>{m.product_info_delivery_from()} <strong>10 000 ₸</strong> {m.product_info_delivery_free()}</div>
                    <button className={styles.price_list}>
                        {m.product_info_price()}
                        <Image src={DownloadLogo}
                                alt=""></Image>
                    </button>
                </div>
                <ul className={styles.details}>
                    {details.map((detail) => (
                        <li>
                            {detail.label}: <span>{detail.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
