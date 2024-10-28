import { items } from './data.js';
import { getImageUrl } from './utils.js';
import './style.css';

export default function PromItems() {
  return (
    <div>
      <h1 style={{ textAlign: 'left' }}>Акционные товары</h1>
      <div className="item-container">
        {items.map(item => (
          <div className="item" key={item.id}>
            <img
              src={getImageUrl(item)}
            />
            <div style={{ display: 'block', marginTop: '5px' }}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
