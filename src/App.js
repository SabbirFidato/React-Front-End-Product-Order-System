//import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import AppHeader from './Components/AppHeader'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Components/Login'
import AdminProductList from './Components/admin/AdminProductList'
import AddProduct from './Components/admin/AddProduct'
import OrderList from './Components/admin/OrderList'
import UpdateProduct from './Components/admin/UpdateProduct'
import UserProductList from './Components/user/UserProductList'

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url(/e-pic-2.JPG)', height:'100vh' , backgroundSize: 'cover', backgroundPosition:'center',  backgroundRepeat: 'no-repeat'}}>

      <BrowserRouter>
        <AppHeader/>
        
        <Switch>
          <Route path='/login'>
              <Login/>
          </Route>

          <Route path='/AdminProductList'>
              <AdminProductList/>
          </Route>

          <Route path='/AddProduct'>
              <AddProduct/>
          </Route>

          <Route path='/updateProductsMenu'>
              <UpdateProduct/>
          </Route>

          <Route path='/OrderList'>
              <OrderList/>
          </Route>

        </Switch>

        <Switch>
        <Route path='/UserProductList'>
              <UserProductList/>
          </Route>
        </Switch>
        

      </BrowserRouter>
    </div>
  );
}

// function AdminMode()
// {
//   document.getElementById("loggerMenu").hidden = false;
//   document.getElementById("adminProductsMenu").hidden = false;
//   document.getElementById("orderListMenu").hidden = false;
//   document.getElementById("addProductMenu").hidden = false;
// }

// function DefaultMode()
// {
//   document.getElementById("loggerMenu").hidden = false;
//   document.getElementById("adminProductsMenu").hidden = false;
//   document.getElementById("orderListMenu").hidden = false;
//   document.getElementById("addProductMenu").hidden = false;
// }

export default App;
