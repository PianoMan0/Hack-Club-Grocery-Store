import React from 'react';
import ProductCard from '../../components/ProductCard';

const Products = () => {
    const products = [
        {
            id: 1,
            title: 'Organic Apples',
            price: '$3.99',
            image: 'path/to/apple-image.jpg',
        },
        {
            id: 2,
            title: 'Whole Wheat Bread',
            price: '$2.49',
            image: 'path/to/bread-image.jpg',
        },
        {
            id: 3,
            title: 'Almond Milk',
            price: '$2.99',
            image: 'path/to/almond-milk-image.jpg',
        },
    ];

    return (
        <div className="products-page">
            <h1>Our Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
