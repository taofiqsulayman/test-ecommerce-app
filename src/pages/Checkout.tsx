// import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Checkout = () => {
  const { cartItems, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors: any = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.cardNumber) errors.cardNumber = 'Card number is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    alert('Purchase successful!');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return <Container sx={{ textAlign: 'center', py: 4 }}><Typography variant="h5">Your cart is empty.</Typography></Container>;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>Checkout</Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} flexDirection={'column'}>
          {/* Name Field */}
          <Grid>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.name}
              helperText={formErrors.name}
              variant="outlined"
            />
          </Grid>

          <Grid>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.email}
              helperText={formErrors.email}
              variant="outlined"
            />
          </Grid>

          <Grid>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.address}
              helperText={formErrors.address}
              variant="outlined"
            />
          </Grid>

          <Grid>
            <TextField
              label="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.cardNumber}
              helperText={formErrors.cardNumber}
              variant="outlined"
              inputProps={{ maxLength: 16 }} 
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>Total: ${getTotal()}</Typography>
          <Button variant="contained" color="primary" size="large" type="submit">
            Submit Payment
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Checkout;
