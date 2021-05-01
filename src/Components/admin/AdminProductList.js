import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap' 
import AddProduct from './AddProduct';

function AdminProductList()
{
    const [data, setData]=useState([]); 
    useEffect( async ()=>{
        let result = await fetch("http://localhost:8000/api/GetProducts");
        result = await result.json();
        setData(result)
    },[])

    console.warn("result", data)

    return (
        <div style={{backgroundColor:'white'}}> 
            <h1>Admin product List</h1>
            <Table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Category Id</td>
                    <td>SKU</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                </tr>
                {
                    data.map((product)=>
                        <tr>
                            <td>{product.product_id}</td>
                            <td>{product.product_name}</td>
                            <td>{product.cat_name}</td>
                            <td>{product.cat_id}</td>
                            <td>{product.sku}</td>
                            <td>{product.unit_price}</td>
                            <td>{product.description}</td>
                            <td><img  src={"http://localhost:8000/"+product.image_path} /></td>
                        </tr>
                        )
                }
            </Table>
        </div>
    )
}

export default AdminProductList