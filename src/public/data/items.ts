import {Item} from "@/public/models/Item"

import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'

export const items: Item[] = [{
  id: 0, // Used in JSX as a key
  ml: '450',
  imageId: image1,
  name: 'SORTI Средство для мытья посуды',
  barcode: '40215987352',
  manufacturer:'Нефис',
  brand:'AOS',
  price: '48,78',

}, {
  id: 1, // Used in JSX as a key
  ml: '450',
  imageId: image2,
  name: 'AOS Средство для мытья посуды',
  barcode: '40215987352',
  manufacturer:'Нефис',
  brand:'AOS',
  price: '48,78',

}, {
  id: 2, // Used in JSX as a key
  ml: '450',
  imageId: image3,
  name: 'ARIEL Средство для мытья посуды',
  barcode: '40215987352',
  manufacturer:'Нефис',
  brand:'AOS',
  price: '48,78',

}, {
  id: 3, // Used in JSX as a key
  ml: '450',
  imageId: image4,
  name: 'BIMAX Средство для мытья посуды',
  barcode: '40215987352',
  manufacturer:'Нефис',
  brand:'AOS',
  price: '48,78',

}];