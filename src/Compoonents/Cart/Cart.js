import React from 'react';
import'./Cart.css'
const Cart = (props) => {
        const {name,picture}=props.toy;
       const {Random }=props
    return (
        <div className='cart'>
           <img src={picture} alt="" />
             <p>{name}</p>
        </div>
    );
};

export default Cart;