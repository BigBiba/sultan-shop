import { Button } from "../shared/Button";
import AddressInfo from "../AddressInfo/AddressInfo";
import MailInfo from "../MailInfo/MailInfo"
import CatalogLogo from "@/public/icons/catalog.svg"
import DownloadLogo from "@/public/icons/download.svg"
import RefsList from "../RefsList/RefsList";
import styles from "./Header.module.scss"
import MainLogo from "../MainLogo/MainLogo";
import Search from "../Search/Search";
import PhoneInfo from "../PhoneInfo/PhoneInfo";
import Basket from "../Basket/Basket";
import * as m from "@/paraglide/messages.js"



export default function Header({lang}: { lang: string}) {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className={styles.info_container}>
                    <AddressInfo lang={lang}></AddressInfo>
                    <MailInfo></MailInfo>
                </div>
                <RefsList></RefsList>
            </div>
            <hr></hr>
            <div className={styles.bottom}>
                <MainLogo></MainLogo>
                <div className={styles.catalog_button}>
                    <Button text={m.main_header_catalog()} icon_src={CatalogLogo} icon_alt="Catalog" width={192} height={59}></Button>
                </div>
                <Search></Search>
                <PhoneInfo></PhoneInfo>
                <span></span>
                <Button text={m.main_header_price()} icon_src={DownloadLogo} icon_alt="Price" width={200} height={59}></Button>
                <span></span>
                <Basket></Basket>
            </div>
        </header>
    )
}