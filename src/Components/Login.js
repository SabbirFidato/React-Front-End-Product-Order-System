import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login()
{
    //document.getElementById("adminProductsMenu").hidden = false;

    const [loginid, setLogInId]=useState("");
    const [password, setPassword]=useState("");
    const history = useHistory();

    useEffect(()=>{
        // let user = localStorage.getItem('user-info');
        // if(user && user.type===1){
        //     //if(user.type ==)
        //     history.push("/AdminProductList");
        // }

        // else if (user && user.type===2){
        //     history.push("/UserProductList");
        // }

        // if(localStorage.getItem('user-info')){
        //     history.push("/AdminProductList")
        // }

    }, [])


    async function login()
    {
        
        let credential = {loginid, password};
        console.warn(credential);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credential)
        };
        const response = await fetch('http://localhost:8000/api/login', requestOptions);
        
        const result = await response.json(); //this.setState({ postId: data.id });       
        localStorage.setItem("user-info",JSON.stringify(result))

        // let result = await fetch("http://localhost:8000/api/login", {
        //     mehtod:"POST",
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Accept": "application/json"
        //     }
        //     , body: JSON.stringify(credential)
        // });
        // result = await result.json();
        // localStorage.setItem("user-info",JSON.stringify(result))
        //history.push("/AdminProductList")

        if(result)
        {
            document.getElementById("logOutMenu").hidden=false;
            document.getElementById("loggerMenu").hidden=true;            
            document.getElementById("NameTitle").title = result.userName;

            if(result.type===1)
            {
                document.getElementById("adminProductsMenu").hidden=false;
                document.getElementById("orderListMenu").hidden=false;
                document.getElementById("addProductMenu").hidden=false;

                history.push("/AdminProductList");
            }

            else if(result.type===2)
            {
                history.push("/UserProductList");
            }
        }
            

        else {
            alert.show("Incorrect ID or password.");
        }
    }


    return (
        // <div style={{backgroundImage: 'url(/e-pic-2.JPG)', display: 'flex' ,  justifyContent:'center', alignItems:'center', height: '70vh'}}>          
         <div>   
        {/* <h1>Log in</h1> */}
        
            <div style={{width: '30%', marginLeft:'70vw',  backgroundColor:'whitesmoke'}}>
                <h3>Sign In</h3>

                
                    <label>Log In ID</label>
                    <input type="text" className="form-control" onChange={(e)=>setLogInId(e.target.value)} 
                    placeholder="Enter Log In ID" />

                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} 
                    placeholder="Enter password" />
                
                    <br/>
                <Button type="submit" style={{width:'40%', marginLeft:'30%', marginRight:'30%' }} onClick={login} className="btn btn-primary btn-block">Login</Button>
                <br></br>
            </div>
        </div>
    )
}

export default Login