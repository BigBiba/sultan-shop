import Image from "next/image"
import PinLogo from "@/public/icons/pin.svg"
import * as m from "@/paraglide/messages.js"

import styles from "./AddressInfo.module.scss"

interface AddressInfoProps {
    params: {
      lang: string;
    };
  }

export default async function AddressInfo({lang}: {lang:string}) {
        return (
        <div className={styles.info}>
           <Image className={styles.logo} src={PinLogo} alt="Pin"></Image>
            <p>
            <span>{m.main_header_address_main()}</span>
            <br/>{m.main_header_address_sub()}
            </p>
        </div>
    )
}
