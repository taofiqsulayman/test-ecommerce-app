import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import Home from './Home';

jest.mock('../api/products');

const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

describe('Home Component', () => {
    it('renders loading state initially', () => {
        (fetchProducts as jest.Mock).mockReturnValue(new Promise(() => { }));
        render(<Home />, { wrapper: createWrapper() });
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

});