import { FaShoppingCart } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { AiFillDelete } from "react-icons/ai";
import Logo from "./Images/Logo.png";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const Header = () => {
  const { user, logout, isAuthenticated,loginWithRedirect } = useAuth0();
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="light" variant="light" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img src={Logo} alt="" width="40" />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/men">Men</Link>
        </Navbar.Brand>

        <Navbar.Brand>
          <Link to="/women">Women</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/kids">Kids</Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}

        <Navbar.Brand>
          {isAuthenticated ? (
            <div className="xyz">
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                
                Logout
              </button>
              console.log("xysdf",use.name);
              </div>
          ) : 
    
              <button onClick={() => loginWithRedirect()}>Login</button>
           
          }
        </Navbar.Brand>

        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
