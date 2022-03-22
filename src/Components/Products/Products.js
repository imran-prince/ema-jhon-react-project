import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    // short cut syestem 
    // const{ addtocartHandaler,product}=props
    const {addtocartHandaler}=props
    const {id,name,price,seller,img,ratings}=props.product
    return (
        <div className='all-product'> 
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>price: $ {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings} star</small></p>
           </div>
           <button onClick={()=>addtocartHandaler(props.product)} className='btn-cart'>
               <p>Add to Cart</p>
              <FontAwesomeIcon icon={faShoppingCart }></FontAwesomeIcon>
           </button>
           
        </div>
    );
};

export default Products;