import React from 'react';

const Products = ({ products }) => {
    if (!products || products.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="card">
                    <img src={product.thumbnail} alt={product.title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Price: ${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        return {
            props: {
                products: data.products.slice(0, 3), // Limit to the first 3 products
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                products: [],
            },
        };
    }
};

export default Products;
