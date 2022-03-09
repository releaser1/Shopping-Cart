import React from 'react';
import Product from './Product';
import '../ShopList/ShopList.css'

function ShopList (props) {
    const { products, onAdd } = props;
    return (
            <div className="shop-list-align">
                <div className="shop-list">
             
            {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
             ))}  
             
                </div>         
        </div>
    );
};

export default ShopList;