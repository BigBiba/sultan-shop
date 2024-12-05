import { notFound } from 'next/navigation';
import Image from "next/image"

import { Item } from "@/public/models/Item";
import {items} from "@/public/data/items"

function getProductData(id: number): Item | null {
    const res = items.find(item => item.id === id);
    return res || null
}

export default function ProductPage({params}: {params: {id: string}}) {
    const item = getProductData(Number(params.id));
    if (!item) {
        notFound();
    }
    return (
      <div>
        <Image
        src={item.imageId}
        alt=''></Image>

      </div>
    );
}
