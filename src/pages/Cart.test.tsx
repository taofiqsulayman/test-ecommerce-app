// import { render, screen, fireEvent } from '@testing-library/react';
// import { CartProvider } from '../context/CartContext';
// import { CartContext } from '../context/CartContext';
// import { useContext } from 'react';
// import { renderHook } from '@testing-library/react-hooks';
// import Cart from './Cart';

// test('renders empty cart message', () => {
//   render(
//     <CartProvider>
//       <Cart />
//     </CartProvider>
//   );

//   expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
// });

// test('renders cart with items and allows quantity update', () => {
//     const testItems = [
//       { id: 1, name: 'Product 1', price: 10, quantity: 1 },
//     ];
  
//     // Update the cart context with the test items
//     const cartContext = renderHook(() => useContext(CartContext));
//     cartContext.result.current.cartItems = testItems;
  
//     render(
//       <CartProvider>
//         <Cart />
//       </CartProvider>
//     );
  

//   // You can also mock the context and simulate adding an item for testing.
//   expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
//   const incrementButton = screen.getByText('+');
//   fireEvent.click(incrementButton);
//   expect(screen.getByText(/2/i)).toBeInTheDocument();
// });
