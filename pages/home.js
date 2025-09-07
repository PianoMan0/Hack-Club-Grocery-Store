import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from '../components/ProductCard';
import './main.css';

const Home = () => {
    const featuredProducts = [
        {
            id: 1,
            title: 'Organic Apples',
            price: '$3.99',
            image: 'path/to/apple-image.jpg',
        },
        {
            id: 2,
            title: 'Whole Grain Bread',
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
        <div>
            <Header />
            <main>
                <h1>Welcome to Hack Club Grocery Store</h1>
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <div className="product-list">
                        {featuredProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                title={product.title} 
                                price={product.price} 
                                image={product.image} 
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;