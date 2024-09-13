import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/types';
import { Box, Button, Container, Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';


const Home = () => {
  const [page, setPage] = useState(1);  
  const limit = 8;  

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts({ pageParam: page, limit }),
    keepPreviousData: true,  
  });

  const handleNextPage = () => setPage((old) => old + 1);
  const handlePreviousPage = () => setPage((old) => (old === 1 ? 1 : old - 1));

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexWrap: 'wrap', gap: 4 }}>
        <Typography>Loading...</Typography>
        <Skeleton variant="rectangular" width={350} height={600} />
        <Skeleton variant="rectangular" width={350} height={600} />
        <Skeleton variant="rectangular" width={350} height={600} />
        <Skeleton variant="rectangular" width={350} height={600} />
        <Skeleton variant="rectangular" width={350} height={600} />
        <Skeleton variant="rectangular" width={350} height={600} />
      </Box>
    );
  }

  if (isError) {
    return <Container>Error: {error instanceof Error ? error.message : 'An error occurred'}</Container>;
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        {data.products.map((product: Product) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 4 }}>
        <Button
          variant="outlined"
          onClick={handlePreviousPage}
          disabled={page === 1}  
        >
          Previous
        </Button>
        <Typography variant="body1" sx={{ mx: 2 }}>
          Page {page}
        </Typography>
        <Button
          variant="outlined"
          onClick={handleNextPage}
          disabled={data.products.length < limit} 
        >
          Next
        </Button>
      </Box>

      {isFetching && <Typography>Loading...</Typography>}
    </>
  );
};

export default Home;
