"use client";

import Image from "next/image";
import Header from "@/components/Header/Header";
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ProductCard from '@/components/ProductCard/productcard'; // Импортируем компонент ProductCard
import { Footer } from "@/components/Footer/footer";
import { useParams } from 'next/navigation';
import {items} from "@/public/data/items";

export default function ProductPage() {
  const params = useParams();
  const itemId = parseInt(params.id || '0'); // Извлекаем ID товара из URL

  // Находим нужный товар по ID
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return <div>Товар не найден</div>; // Обработка случая, когда товар не найден
  }

  return (
    <div>
      <Header />
      <Breadcrumbs productName={item.nameRu} categories={item.categories}/> 
      <ProductCard item={item} productUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/product/${itemId}`} /> 
      <Footer />
    </div>
  );
}