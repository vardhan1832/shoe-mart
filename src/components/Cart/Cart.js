import React, {useContext} from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../../store/cartcontext";

const Cart = (props) => {
    const cartctx = useContext(CartContext)
    const orderHandler = () =>{
        alert("Your Order has been placed")
        cartctx.orderCart()
        props.onHide()
    }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            xl={3}
            md={3}
            lg={3}
            className="g-4 justify-content-between"
            style={{ marginBottom: "2rem" }}
          >
            <Col lg={6} md="6" xl="6">
              Product
            </Col>
            <Col lg={2} md="2" xl="2">
              Price
            </Col>
            <Col lg={4} md="4" xl="4">
              Quantity
            </Col>
          </Row>
          {cartctx.items.map((item, index) => {
            return (
              <Row key={index} xl={3} md={3} lg={3} className="mb-2">
                <Col lg="6" md="6" xl="6">
                  <span>{item.name}</span>
                </Col>
                <Col lg="2" md="2" xl="2" style={{display:'flex',alignItems:'center'}}>
                  {item.price}
                </Col>
                <Col lg="4" md="4" xl="4">
                  {item.Amount}

                  <Button variant="primary" className="m-3" onClick={()=>cartctx.removeProduct(item.id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <p>Total Price: {cartctx.totalPrice}</p>
          <Button onClick={orderHandler}>Order</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
