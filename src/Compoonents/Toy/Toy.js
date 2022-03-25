import React, { useEffect, useState } from 'react';
import './Toy.css'
const Toy = () => {
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <div className='toys'>
            <div className="toys-product">
                {
                    toys.map(toy=><Showtoy toy={toy}
                   key={toy.id}>
                   </Showtoy>)
                }
            </div>
            <div className="toys-cart">

            </div>
        </div>
    );
};
const Showtoy=(props)=>{
    const{name,picture}=props.toy
    return(
        <div>
            <img src={picture} alt="" />
           <p>{name}</p> 
        </div>
    )
}
export default Toy;