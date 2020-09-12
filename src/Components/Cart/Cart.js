import React from 'react';

import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total,prd) => total + prd.price * prd.quantity, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
         total = total + product.price * product.quantity;      
    }
    let shipping = 0;
    if(total>0){
        shipping = 12
    }
    if(total>35){
        shipping = 0;
    }

    else if(total > 12){
        shipping = 4.99;
    }
    
    const tax = (total/10).toFixed(3);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <div>
            <h3>This is Cart</h3>
            <h4>Items Ordered:{cart.length}</h4>
            <p><small>shipping cost: {formatNumber(total)}</small></p>
            <p><small>Tax+VAT: {tax}</small></p>
            <h5>Total : {grandTotal}</h5>
            <br/>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;