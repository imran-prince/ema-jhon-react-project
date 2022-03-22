import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Show.css'

const Show = () => {
    const [allproducts,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(rs=>rs.json())
        .then(data=>setProducts(data))
    },[])

    const orderHandaler=(allproducts)=>{
        const newCart=[...cart,allproducts]
        setCart(newCart)
    }
    return (
        <div className='shop-container '>
            <div className="products-container ">
                 {
                     allproducts.map(product=><Products  product={product} key={product.id}
                        addtocartHandaler={orderHandaler}
                     ></Products>)
                 }
            </div>
            <div className="order-summry">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Show;