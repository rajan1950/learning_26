import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export const ApiDemoTask = () => {

  const [data,setData] = useState(null)

    const getData = async () => {

        const response = await fetch("https://dummyjson.com/products")
        const result = await response.json()
        console.log(result);
        setData(result)

    }


  return (
    <div style={{textAlign : 'center'}}>
        <h1>ApiDemoTask</h1>
        <button onClick={getData}>Get Data</button>
        <p>Products : {data?.products.length}</p>

        <table className='table table-danger table-bordered table-hover' >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description </th>
                    <th>Price</th>
                    <th>Discount Percentage</th>
                    <th>Rating</th>
                    <th>Stock</th>
                    <th>Brand</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.products.map((product) => {
                        return <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.discountPercentage}</td>
                            <td>{product.rating 
                                ? product.rating >=3 ? < span style={{color : "green"}}>{product.rating}</span>
                                : <span style={{color : "red"}}>{product.rating}</span>
                                : "No rating"
                              }</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                        </tr>
                    }
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
