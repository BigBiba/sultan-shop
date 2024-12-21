"use client";

import React, { useState } from "react";

import { notFound } from "next/navigation";
import Image from "next/image";
import { Item } from "@/public/models/Item";
import { items } from "@/public/data/items";
import ItemMini from "@/components/ItemMini/ItemMini";
import CheckboxFilter from "@/components/CheckboxFilter/CheckboxFilter";
import styles from "./page.module.scss";
import allCategories from "@/public/data/categories.json";

export default function CatalogPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const subcategories = allCategories.categories
    .find((ctgr) => ctgr.category == category)
    ?.subcategories.map((sub) => sub.category);
  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory)
        : [...prev, subcategory]
    );
  };

  const [sortOption, setSortOption] = useState("default");
  const handleSortChange = (event: any) => {
    setSortOption(event.target.value);
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const handleMinPriceChange = (event: any) => {
    setMinPrice(event.target.value);
  };
  const handleMaxPriceChange = (event: any) => {
    setMaxPrice(event.target.value);
  };

  const brands = [...new Set(items.map((item: Item) => item.brand))];
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const manufacturers = [...new Set(items.map((item: Item) => item.manufacturer))]; 
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
  const handleManufacturersChange = (manufacturer: string) => {
    setSelectedManufacturers((prev) =>
      prev.includes(manufacturer)
        ? prev.filter((item) => item !== manufacturer)
        : [...prev, manufacturer]
    );
  };

  const itemsList = items
    .filter(
      (item) =>
        item.categories &&
        item.categories.includes(category) &&
        (selectedSubcategories.length === 0 ||
          selectedSubcategories.some((subcategory) =>
            item.categories.includes(subcategory)
          ))
    )
    .filter(
      (item) =>
        item.brand &&
        (selectedBrands.length === 0 ||
          selectedBrands.some((brand) => item.brand == brand))
    )
    .filter(
      (item) =>
        item.manufacturer &&
        (selectedManufacturers.length === 0 ||
          selectedManufacturers.some((manufacturer) => item.brand == manufacturer))
    )
    .filter((product: Item) => {
      const price = product.price;
      const min = minPrice;
      const max = maxPrice;
      return price >= min && price <= max;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.nameRu.localeCompare(b.nameRu);
        case "name-desc":
          return b.nameRu.localeCompare(a.nameRu);
        default:
          return 0;
      }
    });
  return (
    <div className={styles.item_container}>
      <select value={sortOption} onChange={handleSortChange}>
        <option value="default">По умолчанию</option>
        <option value="name-asc">A-Z</option>
        <option value="name-desc">Z-A</option>
        <option value="price-asc">Сначала дешевые</option>
        <option value="price-desc">Сначала дорогие</option>
      </select>
      {subcategories?.map((subcategory) => (
        <div key={subcategory}>
          <label>
            <input
              type="checkbox"
              checked={selectedSubcategories.includes(subcategory)}
              onChange={() => handleSubcategoryChange(subcategory)}
            />
            {subcategory}
          </label>
        </div>
      ))}
      <CheckboxFilter
        label="Производитель"
        options={manufacturers}
        selectedOptions={selectedManufacturers}
        onOptionsChange={handleManufacturersChange}
      ></CheckboxFilter>
      <CheckboxFilter
        label="Брэнд"
        options={brands}
        selectedOptions={selectedBrands}
        onOptionsChange={handleBrandChange}
      ></CheckboxFilter>
      <div>
        Подбор по параметрам Цена ₸
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      {itemsList.map((item) => (
        <ItemMini item={item}></ItemMini>
      ))}
    </div>
  );
}
