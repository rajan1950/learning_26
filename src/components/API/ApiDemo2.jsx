import axios from 'axios';
import React from 'react'
import { useState } from 'react';


export const ApiDemo2 = () => {

    const [products, setproducts] = useState([])


    const getProducts = async () => {

        const response = await axios.get("https://dummyjson.com/products")

        console.log(response.data);
        console.log(response.data.products);
        setproducts(response.data.products);

    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>ApiDemo2</h1>
            <button onClick={getProducts}>Get Products</button>
            <p>Products : {products.length}</p>

            <table className='table-danger table' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        {/* <th>Description</th> */}
                        <th>Price</th>
                        <th>DiscountPercentage</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Thumbnail</th>
                        {/* <th>Images</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                {/* <td>{product.description}</td> */}
                                <td>{product.price}</td>
                                <td>{product.discountPercentage}</td>
                                <td>{product.rating}</td>
                                <td>{product.stock}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td><img src={product.thumbnail} alt={product.title} width="100" /></td>
                                {/* <td>{
                                    product.images.map((image, index) => {
                                        return <img key={index} src={image} alt={`${product.title} ${index}`} width="100" />
                                    })
                                }</td> */}
                            </tr>
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
