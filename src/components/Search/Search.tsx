import Image from "next/image"
import SearchLogo from "@/public/icons/search.svg"
import * as m from "@/paraglide/messages.js"

import styles from "./Search.module.scss"

export default function Search() {
    return (
        <div className={styles.search_bar}>
            <input type="text" placeholder={m.main_header_search()} />
            <button>
                <Image src={SearchLogo} alt=""></Image>
            </button>
        </div>
    )
}
