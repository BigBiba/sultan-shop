import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import image1 from '/src/public/images/1.jpg';
import image2 from '/src/public/images/2.jpg';
import image3 from '/src/public/images/3.jpg';
import image4 from '/src/public/images/4.jpg';

// Export const items
export const items = [
  {
    id: 0,
    ml: '450',
    imageId: image1,
    name: 'SORTI Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
  {
    id: 1,
    ml: '450',
    imageId: image2,
    name: 'AOS Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
  {
    id: 2,
    ml: '450',
    imageId: image3,
    name: 'ARIEL Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
  {
    id: 3,
    ml: '450',
    imageId: image4,
    name: 'BIMAX Средство для мытья посуды',
    barcode: '40215987352',
    manufacturer: 'Нефис',
    brand: 'AOS',
    price: '48,78',
  },
];
