import {Button} from 'react-bootstrap'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';

function AddProduct()
{
    const [productName, setName]=useState("");
    const [categoryId, setCategory]=useState("");
    const [sku, setSKU]=useState("");
    const [unitPrice, setUnitPrice]=useState("");
    const [description, setDescription]=useState("");
    const [imagePath, setFilePath]=useState("");
    const history = useHistory();

    async function SaveProduct()
    {
        console.warn(productName, categoryId, sku, unitPrice, description, imagePath);

        const formData = new FormData();
        formData.append('productName',productName);

        if(!categoryId){formData.append('categoryId',1);}
        else{formData.append('categoryId',categoryId);}
        
        formData.append('sku',sku);
        formData.append('unitPrice',unitPrice);
        formData.append('description',description);
        formData.append('imagePath',imagePath);

        let result = fetch("http://localhost:8000/api/EntryProduct", {
            method: 'POST',
            body: formData
        });
        alert("Data Successfully saved");
        //history.push('/AddProduct');
        window.location.reload();
    }


    return (
            <div className="col-sm-6 offset-sm-3" style={{backgroundColor:'white', marginTop:'5%'}}>
                <h3>Add New Product</h3>
                <input style={{marginTop:'10px'}} type="text" className="form-control"
                onChange={(e)=>setName(e.target.value)} placeholder="Product Name"/>

                <select style={{marginTop:'10px', marginLeft:'unset', backgroundColor:'gray'}} id='categoryDrpDown'
                onChange={(e)=>setCategory(e.target.value)} title="Categories">
                    <option defaultValue="1" >Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                </select> 

                <input style={{marginTop:'10px'}} type="text" className="form-control"
                onChange={(e)=>setUnitPrice(e.target.value)} placeholder="Unit Price"/>

                <input style={{marginTop:'10px'}} type="text" className="form-control" 
                onChange={(e)=>setSKU(e.target.value)} placeholder="sku"/>

                <input style={{marginTop:'10px'}} type="text" className="form-control" 
                onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/>

                <input style={{marginTop:'10px', marginDown:'10px'}} type="file" className="form-control" 
                onChange={(e)=>setFilePath(e.target.files[0])} placeholder="Choose your image"/>


                <Button type="submit" onClick={SaveProduct} style={{width:'40%', marginLeft:'30%', marginRight:'30%', marginTop:'10px' }} className="btn btn-primary btn-block">Save Product</Button>
                <br></br>
            </div>
    )
}

export default AddProduct