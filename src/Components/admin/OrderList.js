import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap' 
import { Redirect, useHistory } from 'react-router-dom';


function OrderList()
{
    const history = useHistory();

    const [data, setData]=useState([]); 
    useEffect( async ()=>{
        let result = await fetch("http://localhost:8000/api/GetOrders");
        result = await result.json();
        setData(result)
    },[])

    console.warn("result", data)

    async function UpdateOrderStatus(orderId, statusId)
    {   
         
        //alert(orderId+"--------"+statusId);

        const formData = new FormData();
        formData.append('orderId',orderId);
        formData.append('statusId',statusId); 

        let result = fetch("http://localhost:8000/api/UpdateOrderStatus", {
            method: 'POST',
            body: formData
        });
        alert("Order Status updated");
        //history.push('/OrderList');
        window.location.reload();
    }

    return (
        <div style={{backgroundColor:'white'}}> 
            
            <h1>Orders</h1>

            <Table>
                <tr>               
                    <td>Order ID</td>
                    <td>Buyer Name</td>
                    <td>Product Name</td>
                    <td>Category</td>
                    <td>SKU</td>
                    <td>Bill</td>
                    <td>Description</td>
                    <td>Status</td>
                </tr>
                {
                    data.map((order)=>
                        <tr>
                            <td>{order.order_id}</td>
                            <td>{order.user_name}</td>
                            <td>{order.product_name}</td>
                            <td>{order.cat_name}</td>
                            <td>{order.sku}</td>
                            <td>{order.total}</td>
                            <td>{order.description}</td>

                            {/* <td>{order.status}</td> */}

                            <td>
                                <select style={{ backgroundColor:'gray'}} id='categoryDrpDown' 
                                onChange={(e)=>UpdateOrderStatus(order.order_id, e.target.value)}
                                value={order.status_id} title="Categories">
                                
                                    <option value="1" >Processing</option>
                                    <option value="2">Shipped</option>
                                    <option value="3">Delivered</option>
                                </select> 
                            </td>
                        </tr>
                        )
                }
            </Table>

        </div>
    )
}

export default OrderList