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



export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <AddressInfo></AddressInfo>
                <MailInfo></MailInfo>
                <RefsList></RefsList>
            </div>
            <div className={styles.bottom}>
                <MainLogo></MainLogo>
                <Button text="Каталог" icon_src={CatalogLogo} icon_alt="Catalog"></Button>
                <Search></Search>
                <PhoneInfo></PhoneInfo>
                <Button text="Прайс-лист" icon_src={DownloadLogo} icon_alt="Price"></Button>
                <Basket></Basket>
            </div>
        </header>
    )
}