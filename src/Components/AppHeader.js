import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

function AppHeader()
{
    let logger = JSON.parse(localStorage.getItem('user-info'));
    const history = useHistory();
    function logout()
    {
        localStorage.clear();
        document.getElementById("NameTitle").title = "";

        document.getElementById("loggerMenu").hidden=false;

        document.getElementById("adminProductsMenu").hidden=true;
        document.getElementById("orderListMenu").hidden=true;
        document.getElementById("addProductMenu").hidden=true;
        document.getElementById("logOutMenu").hidden=true;

        history.push('/');
    }

    function checkAdmin()
    {
        if(!logger || logger.type===2 )
        {
            return true;
        } 

        else{
            return false;
        }
        
    }

    function checkUser()
    {
        if(logger)
        {
            return false;
        }

        else 
        {
            return true;
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand Link to="/home">Product Lagbe</Navbar.Brand>
                <Nav className="mr-auto navbar-seperator ">
                <Link id="loggerMenu" to="/login" hidden={logger}>Login</Link>
                <Link id="adminProductsMenu" to="/AdminProductList" hidden={checkAdmin()} >Products</Link>
                <Link id="orderListMenu" to="/OrderList" hidden={checkAdmin()}>Oders</Link>
                <Link id="addProductMenu" to="/AddProduct" hidden={checkAdmin()}>Add New Product</Link>

                {/* <Link id="userProductMenu" to="/UserProductList">User ProductList</Link> */}

                {/* <Link to="/UpdateProduct">Update Product Details</Link> */}
                {/* <Link to="/login">Login</Link> */}

                </Nav>

                {localStorage.getItem('user-info')?
                <Nav id='logOutMenu' style={{marginRight: '10%'}} hidden={checkUser()}>
                    <NavDropdown id='NameTitle' title={logger && logger.userName}>  
                    {/* <NavDropdown id='NameTitle'>  */}
                        <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null}

                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </div>
    )
}

export default AppHeader