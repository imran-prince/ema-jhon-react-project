import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total=0;
    let shiping=0;
    for(const product of cart)
    {
        total+=product.price
        shiping=shiping+product.shipping
    }
    const tax=(total*0.1).toFixed(2)
     const gtotal=parseInt(tax)+ parseInt(total)+parseInt(shiping)
    console.log(gtotal);
     
    return (
        <div className='cart'>
             <h1>order summery</h1>
                <p>selected item: {cart.length}</p>
                <p>Price: $ {total}</p>
                <p>Shiping: $ {shiping}</p>
                <p>Tax: $ {tax}</p>
                <p>Grand Total: $ {gtotal}</p>

        </div>
    );
};

export default Cart;