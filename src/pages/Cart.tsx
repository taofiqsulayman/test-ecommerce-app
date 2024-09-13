import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="border p-4 rounded shadow-md">
            <h3 className="text-xl">{item.name}</h3>
            <p>${item.price}</p>
            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl">Total: ${getTotal()}</h3>
        <Link to="/checkout">
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
