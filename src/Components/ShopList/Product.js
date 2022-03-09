import React from 'react';

export default function Product (props) {
    const {product, onAdd} = props
    return (
        <div className="parent-shop-list">
            <img className="" src={product.image} alt={product.name} />
            <h3 className="shoes-name">{product.name}</h3>
            <div className="shoes-price">${product.price}</div>
            <div>
                <button className="button-33"  onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    );
};


