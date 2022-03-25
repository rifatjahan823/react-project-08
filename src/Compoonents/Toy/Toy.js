import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Toy.css'
const Toy = () => {
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    const [cart,setCart]=useState([])
    const GetCartDetails =(toy)=>{
        const carts =[...cart,toy]
        setCart(carts)
    }
    return (
        <div>
            <h1>Babys toys</h1>
        <div className='toys'>
            <div className="toys-product">
                {
                    toys.map(toy=><Showtoy toy={toy}
                   key={toy.id}
                   GetCartDetails={GetCartDetails}>
                   </Showtoy>)
                }
            </div>
            <div className="toys-cart">
            {
                    cart.map(toy=><Cart toy={toy}
                   key={toy.id}
                   cart={toy}>
                   </Cart>)
                }
                  <h1>select</h1>
             
            </div>
        </div>
        </div>
    );
};
const Showtoy=(props)=>{
    const{name,picture}=props.toy
    return(
        <div className='Showtoy'>
            <img src={picture} alt="" />
            <p>{name}</p> 
           <button onClick={()=>props.GetCartDetails(props.toy)} className='toys-btn'>
                <p>Add To Cart</p>
           </button>
        </div>
    )
}
export default Toy;