import { StaticImageData } from "next/image";

export interface Item {
    id: number; // Уникальный идентификатор
    ml: string; // Объем
    imageId: StaticImageData; // ID или путь изображения
    name: string; // Название товара
    barcode: string; // Штрихкод
    manufacturer: string; // Производитель
    brand: string; // Бренд
    price: string; // Цена
}
