import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Checkout from './Checkout';
import { CartProvider } from '../context/CartContext';

const renderCheckout = () => {
    return render(
        <MemoryRouter>
            <CartProvider>
                <Checkout />
            </CartProvider>
        </MemoryRouter>
    );
};

describe('Checkout Component', () => {
    it('renders empty cart message when cart is empty', () => {
        renderCheckout();
        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });
});