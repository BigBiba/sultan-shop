import { Link } from "@/lib/i18n"
import styles from "./RefsList.module.scss"
import * as m from "@/paraglide/messages.js"


export default function RefsList() {
    const listItems = [m.main_list_about(),
        m.main_list_delivery(),
        m.main_list_refund(),
        m.main_list_contacts()].map(item =>
        <li><Link className={styles.link} href="">{item}</Link></li>
      );
    return (
        <div>
           <ul className={styles.list}>
                {listItems}
           </ul>
        </div>
    )
}