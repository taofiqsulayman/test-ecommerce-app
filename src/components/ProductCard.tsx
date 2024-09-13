import { Card, CardContent, CardMedia, Typography, Button, Select, MenuItem, Rating, Box } from '@mui/material';
import { useCart } from '../context/CartContext';
import ColorRadioButtons from './ColorRadioButtons';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
    brand: string;
    stock: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: 1,
            image: product.images[0],
        });
    };

    return (
        <Card sx={{ maxWidth: 345, height: 700, m: 2, pt: 2, display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 2 }}>
            <CardMedia
                component="img"
                height="280"
                image={product.images[0]}
                alt={product.title}
                onError={(e) => (e.currentTarget.src = '/placeholder-image.png')}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '70%' }}>
                <Typography gutterBottom variant='body2' component="div" color="text.secondary">
                    {product.brand}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: 16, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} >
                        {product.title}
                    </Typography>
                    <Rating name="read-only" value={product.rating} precision={0.5}  size="medium" sx={{ color: '#0F172A'}} readOnly />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, justifyContent: 'space-between' }}>
                    <ColorRadioButtons />
                    <div>
                        <Typography variant="body2"> SIZE </Typography>
                        <Select defaultValue="small" sx={{ width: 90, fontSize: 10, borderRadius: 2, background: '#E8E8E880', mt: .5 }}>
                            <MenuItem value="small">Small</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="large">Large</MenuItem>
                        </Select>              
                    </div>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {product.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="h6" sx={{ mt: 2, border: '1px solid #000', py: 1, px: 2, borderRadius: 1 }}>
                        ₦ {product.price}
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2, background: '#7CE0C3' }} onClick={handleAddToCart}>
                        ADD TO CART +
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
