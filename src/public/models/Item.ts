import { StaticImageData } from "next/image";

export interface Item {
    id: number; // Уникальный идентификатор
    shortNameRu: string;
    shortNameEn: string;
    nameRu: string;
    nameEn: string;
    imageId: StaticImageData; // ID или путь изображения
    sizeType: string; 
    size: number; // Объем
    category: string[]; // Категории
    barcode: number; // Штрихкод
    brand: string; // Бренд
    article: number; // Артикул
    manufacturer: string; // Производитель
    amount: number; // Кол-во
    price: number; // Цена
}
