import { notFound } from 'next/navigation';
import Image from "next/image"
import { Item } from "@/public/models/Item";
import {items} from "@/public/data/items"

export default function CatalogPage({params}: {params: {category: string}}) {
  const category = params.category;
    const itemsList = items.filter(item => item.categories && item.categories.includes(category));
    return (
      <div>
        
      </div>
    );
}