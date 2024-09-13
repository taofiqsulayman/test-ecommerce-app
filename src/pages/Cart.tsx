import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, Typography, IconButton, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  if (cartItems.length === 0) {
    return <Container sx={{ textAlign: 'center', py: 4 }}><Typography variant="h5">Your cart is empty.</Typography></Container>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>Shopping Cart</Typography>

      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={item.id}>
            <Card sx={{ display: 'flex', alignItems: 'center', p: 2, width: '320px', justifyContent: 'space-between', height: '200px' }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ width: 150, height: 150, objectFit: 'cover', mr: 2 }}
              />
              
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Price: ${item.price}</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                    <RemoveCircleIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ mx: 2 }}>{item.quantity}</Typography>
                  <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <AddCircleIcon />
                  </IconButton>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'right', mt: 4, mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Total: ${getTotal()}</Typography>
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" size="large">
            Proceed to Checkout
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Cart;
