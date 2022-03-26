import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Toy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Toy = () => {
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    //---- set cart details--------- 
    const [cart,setCart]=useState([])

        const GetCartDetails =(toy)=>{
        const carts =[...cart,toy]
        setCart(carts)
    }
// ----- reset button------------
    const CartReset =()=>{
        const reset =[]
        setCart(reset)
    }
    //----- rendom product select-------
    const Random =()=>{
         const random =[Math.round(Math.random()*cart.length)]
            
            if(!cart.length){
                alert("please select product")
               }
               else{
                alert("your selection"+" "+cart[random].name)
               }
           console.log(cart)
    }
    return (
        <div className='toys'>
            <div className="toys-product">
                {
                    toys.map(toy=><Showtoy toy={toy}
                   key={toy.id}
                   GetCartDetails={GetCartDetails}
                  >
                   </Showtoy>)
                }
            </div>
            <div className="toys-cart">
            <h1>select</h1>
            {
                cart.map(toy=><Cart toy={toy}
                    key={toy.id}
                    cart={toy}
                    Random ={Random }
                    >
                    </Cart>)
                }
             <button className='Cart-btn' onClick={CartReset}>Chose again</button>
             <button className='Cart-btn' onClick={Random}>random</button>
            
             <br></br>
             
            </div>
        </div>
    );
};
const Showtoy=(props)=>{
    const{name,picture,price}=props.toy
    return(
        <div className='Showtoy'>
            <img src={picture} alt="" />
            <h3>{name}</h3> 
            <p>${price}</p>
           <button onClick={()=>props.GetCartDetails(props.toy)} className='toys-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
           </button>
        </div>
    )
}
export default Toy;