import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h1>order summery</h1>
                <p>selected item: {cart.length}</p>
        </div>
    );
};

export default Cart;