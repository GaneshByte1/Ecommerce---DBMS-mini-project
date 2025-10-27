import { useState } from 'react';
import './App.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const mockProducts: Product[] = [
  { id: 1, name: 'Laptop', price: 999, image: '💻', description: 'High-performance laptop for work and gaming' },
  { id: 2, name: 'Smartphone', price: 699, image: '📱', description: 'Latest smartphone with advanced features' },
  { id: 3, name: 'Headphones', price: 199, image: '🎧', description: 'Premium wireless headphones' },
  { id: 4, name: 'Watch', price: 299, image: '⌚', description: 'Smartwatch with fitness tracking' },
  { id: 5, name: 'Camera', price: 599, image: '📷', description: 'Professional DSLR camera' },
  { id: 6, name: 'Tablet', price: 399, image: '📱', description: '10-inch tablet with great display' },
];

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const productCount = cart.length;

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <h1>🛍️ Ecommerce Store</h1>
          <button className="cart-button" onClick={() => setShowCart(!showCart)}>
            🛒 Cart ({productCount})
          </button>
        </div>
      </nav>

      <div className="container">
        {showCart ? (
          <div className="cart">
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>✕</button>
            </div>
            
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <button onClick={() => setShowCart(false)}>Start Shopping</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div className="cart-item-info">
                        <span className="item-image">{item.image}</span>
                        <div>
                          <h3>{item.name}</h3>
                          <p>${item.price}</p>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="total">
                    <strong>Total: ${getTotal().toFixed(2)}</strong>
                  </div>
                  <button className="checkout-btn">Proceed to Checkout</button>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="hero">
              <h2>Welcome to Our Store</h2>
              <p>Discover amazing products at great prices</p>
            </div>

            <div className="products-grid">
              {mockProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${product.price}</span>
                      <button onClick={() => addToCart(product)} className="add-btn">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <footer>
        <p>&copy; 2024 Ecommerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
