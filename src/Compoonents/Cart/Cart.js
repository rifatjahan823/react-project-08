import React from 'react';
import'./Cart.css'
const Cart = (props) => {
    const {name,picture}=props.toy
   
    return (
        <div className='cart'>
           <img src={picture} alt="" />
               {name}
            
        </div>
    );
};

export default Cart;