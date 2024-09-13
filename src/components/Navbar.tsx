import { AddShoppingCart } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItems } = useCart();
    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginBottom: '20px' }}>
            <Typography variant='h4'>
                <Link to="/" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>
                    Dummy Store
                </Link>
            </Typography>
            <Box sx={{ background: '#7CE0C3', padding: '10px', borderRadius: '5px' }}>
                <Link to="/cart" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AddShoppingCart sx={{ color: '#000' }} />
                    <Typography sx={{ color: '#000' }}>Cart</Typography>
                    <Typography sx={{ color: '#000' }}>{cartItems.length}</Typography>
                </Link>
            </Box>
        </Container>
    );
};

export default Navbar;
