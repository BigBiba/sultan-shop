import {Item} from "@/public/models/Item"

import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'

export const items: Item[] = [{
  id: 0, // Уникальный идентификатор
  shortNameRu: "Средство для мытья посуды",
  shortNameEn: "Dishwashing detergent",
  nameRu: "Средство для мытья посуды",
  nameEn: "Dishwashing detergent",
  imageId: image1, // ID или путь изображения
  sizeType: "мл",
  size: 1020, // Объем
  category: ["Мыло", "Хозтовары"], // Категории
  barcode: 40215987352, // Штрихкод
  brand: 'AOS', // Бренд
  article: 460404, // Артикул
  manufacturer: "AOS", // Производитель
  amount: 2, // Кол-во
  price: 48.78, // Цена

}, {
  id: 1, // Уникальный идентификатор
  shortNameRu: "Средство для мытья посуды",
  shortNameEn: "Dishwashing detergent",
  nameRu: "Средство для мытья посуды",
  nameEn: "Dishwashing detergent",
  imageId: image2, // ID или путь изображения
  sizeType: "мл",
  size: 1020, // Объем
  category: ["Мыло", "Хозтовары"], // Категории
  barcode: 40215987352, // Штрихкод
  brand: 'AOS', // Бренд
  article: 460404, // Артикул
  manufacturer: "AOS", // Производитель
  amount: 2, // Кол-во
  price: 48.78, // Цена

}, {
  id: 2, // Уникальный идентификатор
  shortNameRu: "Средство для мытья посуды",
  shortNameEn: "Dishwashing detergent",
  nameRu: "Средство для мытья посуды",
  nameEn: "Dishwashing detergent",
  imageId: image3, // ID или путь изображения
  sizeType: "мл",
  size: 1020, // Объем
  category: ["Мыло", "Хозтовары"], // Категории
  barcode: 40215987352, // Штрихкод
  brand: 'AOS', // Бренд
  article: 460404, // Артикул
  manufacturer: "AOS", // Производитель
  amount: 2, // Кол-во
  price: 48.78, // Цена

}, {
  id: 3, // Уникальный идентификатор
  shortNameRu: "Средство для мытья посуды",
  shortNameEn: "Dishwashing detergent",
  nameRu: "Средство для мытья посуды",
  nameEn: "Dishwashing detergent",
  imageId: image4, // ID или путь изображения
  sizeType: "мл",
  size: 1020, // Объем
  category: ["Мыло", "Хозтовары"], // Категории
  barcode: 40215987352, // Штрихкод
  brand: 'AOS', // Бренд
  article: 460404, // Артикул
  manufacturer: "AOS", // Производитель
  amount: 2, // Кол-во
  price: 48.78, // Цена
}];
