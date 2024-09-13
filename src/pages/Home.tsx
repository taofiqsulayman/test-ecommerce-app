import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/types';
import { Box, Container, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid2';


const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexWrap: 'wrap', gap: 4 }}>
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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexWrap: 'wrap', gap: 4 }}>
        {data.products.map((product: Product) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default Home;
