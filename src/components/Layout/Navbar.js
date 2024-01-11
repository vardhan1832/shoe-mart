import React, { useContext } from "react";
import { Button, Navbar, Container, Badge } from "react-bootstrap";
import { CartContext } from "../../store/cartcontext";

const NavbarComponent = (props) => {
    const cartctx = useContext(CartContext)
  const noOfCartItems = cartctx.items.reduce((curr, ele) => {
    return curr + ele.Amount;
  }, 0);
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-2"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "10",
        top: "0",
        left: "0",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">Shoe-Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button
          variant="outline-light"
          className="m-1 flex-shrink-0 "
          style={{ width: "120px" }}
          onClick={props.onshowmodal}
        >
          Cart
          <Badge bg="primary" style={{ marginLeft: "1rem" }}>
            {noOfCartItems}
          </Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
