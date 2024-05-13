import React, { Component } from 'react';
import { useState } from 'react';

const  Product2 = () => {
  let   aUrl = "https://digikala.com"


const [count, setcount] = useState(0)
const [productName , setproductName] = useState('shose')


    return (
        <>
        <div>
            <span className=' m-2 '>{productName}</span>
            <span className='m-2 badge bg-primary'>{format()}</span>
            <button onClick={handleInceremnt} className='m-2 btn btn-sm btn-success'>+</button>
            <button onClick={handleDeceremnt} className='m-2 btn btn-sm btn-warning'>-</button>
            <button onClick={handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>
            <a href={aUrl}>digikala</a>
            </div>
        </>
    ); 

  function handleInceremnt(){
        setcount(count +1)
    }
    function handleDeceremnt  (){
        setcount(count -1)
    }


    function  handleDelete  (){
       console.log("delete");
    }

    function format(){
        if (count == 0) {
            return "zero"
        }else{
            return count
        } }   

    }
export default Product2 ;