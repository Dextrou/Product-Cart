import React, { useState } from 'react'
import Data from '../../Data'
import './Cart.css'
export default function Cart() {
  let [itemid,setItemId]=useState([]);
  let err='There are no items in the cart';
  let [flag,setFlag]= useState(true);
  function removeItem(item,values){
   let arr=[];
   arr = item.filter(data=>{
    if(data !== values){
      return data;
    }
   })
   if(arr.length === 0){
    setFlag(true);
   }
   setItemId(arr);
  }
  return (
    <div>
    <div className="product">
      {Data.map(data=>{
        return (
          <div className='product-list'>
            <p>{data.phone}</p>
            <button value={data.phone} id={data.id} onClick={(e)=>{ 
              setFlag(false);
              setItemId([...itemid,e.target.value])}}>ADD-ITEM</button>
            </div>
        )
      })}
    </div>
  <div className="cart">
    <p>Cart</p>
    <strong className='cart-empty'>{flag&&err}</strong>
    
    {
      itemid.map(values=>{
        return (
          <div className='cart-list'>
            <p>
              {values}
            </p>
            <button onClick={(e)=>removeItem(itemid,values)}>Delete</button>
            </div>
        )
      })
    }
  </div>
   </div>
  )
}

