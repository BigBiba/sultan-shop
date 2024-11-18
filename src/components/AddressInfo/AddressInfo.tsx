'use client'

import Image from "next/image"
import PinLogo from "@/public/icons/pin.svg"
import styles from "./AddressInfo.module.scss"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from '@/i18n/index'

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import { getLang } from "@/app/getLang"


interface AddressInfoProps {
    params: {
      lang: string;
    };
  }

export default async function AddressInfo({lang}: {lang:string}) {
    const { t } = await useTranslation(lang)

    return (
        <div className={styles.info}>
           <Image className={styles.logo} src={PinLogo} alt="Pin"></Image>
            <p>
            <span>{t("main.header.address.main")}</span>
            {/* <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span> */}
            <br/>(Рынок Восточный)
            </p>
        </div>
    )
}