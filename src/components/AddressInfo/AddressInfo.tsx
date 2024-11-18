import Image from "next/image"
import PinLogo from "@/public/icons/pin.svg"
import styles from "./AddressInfo.module.scss"

import * as m from "@/paraglide/messages.js"

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import { getLang } from "@/app/getLang"


interface AddressInfoProps {
    params: {
      lang: string;
    };
  }

export default async function AddressInfo({lang}: {lang:string}) {
    // const { t } = await useTranslation(lang)

    return (
        <div className={styles.info}>
           <Image className={styles.logo} src={PinLogo} alt="Pin"></Image>
            <p>
            <span>{m.main_header_address_main()}</span>
            {/* <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span> */}
            <br/>{m.main_header_address_sub()}
            </p>
        </div>
    )
}