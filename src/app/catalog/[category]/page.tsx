'use client'

import React, { useState } from 'react';

import { notFound } from 'next/navigation';
import Image from "next/image";
import { Item } from "@/public/models/Item";
import {items} from "@/public/data/items";
import ItemMini from "@/components/ItemMini/ItemMini";
import styles from "./page.module.scss";
import allCategories from "@/public/data/categories.json"

export default function CatalogPage({params}: {params: {category: string}}) {
    const category = params.category;
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
    const subcategories = allCategories.categories.find(ctgr => ctgr.category == category)?.subcategories.map(sub => sub.category);
    const handleSubcategoryChange = (subcategory: string) => {
      setSelectedSubcategories(prev => 
        prev.includes(subcategory) 
          ? prev.filter(item => item !== subcategory) 
          : [...prev, subcategory]
      );
    };
    const itemsList = items.filter(item =>
       item.categories && item.categories.includes(category) &&
       (selectedSubcategories.length === 0 || 
        selectedSubcategories.some(subcategory => item.categories.includes(subcategory))));
    return (
      <div className={styles.item_container}>
          {subcategories?.map(subcategory => (
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
          {itemsList.map(item => (
            <ItemMini item={item}></ItemMini>
          ))}
      </div>
    );
}
