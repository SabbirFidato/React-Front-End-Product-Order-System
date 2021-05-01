import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {Table, Button} from 'react-bootstrap' 


function UserProductList()
{
    const history = useHistory();

    const [data, setData]=useState([]); 
    useEffect( async ()=>{
        let result = await fetch("http://localhost:8000/api/GetProducts");
        result = await result.json();
        setData(result)
    },[])

    console.warn("result", data)

    
    async function OrderProduct(productId, soldUnitPrice)
    {      
        //console.warn(productId);
        let logger = JSON.parse(localStorage.getItem('user-info'));         

        const formData = new FormData();

        formData.append('productId',productId);
        formData.append('quantity',1); //this is for now single as requirement but implementing preferable quantity input could be implemented but lack of time!
        formData.append('soldUnitPrice',soldUnitPrice);
        formData.append('bill',soldUnitPrice); //preferable quantity*unit price input could be implemented but lack of time!
        formData.append('statusId',1); //default processing status
        formData.append('userId',logger.userID);

        let result = fetch("http://localhost:8000/api/EntryOrder", {
            method: 'POST',
            body: formData
        });
        alert("Order Successfully Placed");
        //history.push('/UserProductList');
        window.location.reload();
    }

    return (
        <div style={{backgroundColor:'white'}}>          
            <h1>User ProductList</h1>

            <Table>
                <tr>
                    {/* <td>ID</td> */}
                    <td>Action</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>SKU</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                </tr>
                {
                    data.map((product)=>
                        <tr>
                            {/* <td>{product.product_id}</td> */}
                            <td> <Button onClick={()=>OrderProduct(product.product_id, product.unit_price)} >Order</Button> </td>
                            <td>{product.product_name}</td>
                            <td>{product.cat_name}</td>
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

export default UserProductList