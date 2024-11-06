import styles from "./Search.module.scss"
import Image from "next/image"
import SearchLogo from "@/public/icons/search.svg"


export default function Search() {
    return (
        <div className={styles.search_bar}>
            <input type="text" placeholder="Поиск..." />
            <button>
                <Image src={SearchLogo} alt=""></Image>
            </button>
        </div>
    )
}