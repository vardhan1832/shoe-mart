import React , {useRef , useContext} from "react";
import { Form, Container, Button } from "react-bootstrap";
import { FormContext } from "../../store/formcontext";

const FormInput = () => {
    const formctx = useContext(FormContext)
    const shoename = useRef()
    const shoeDescription = useRef()
    const shoeprice = useRef()
    const quantityL = useRef()
    const quantityM = useRef()
    const quantityS = useRef()
    const submitHandler=(event)=>{
        event.preventDefault()
        const shoeDetails = {
            id:Math.random(),
            name:shoename.current.value,
            description:shoeDescription.current.value,
            price:shoeprice.current.value,
            L:quantityL.current.value,
            M:quantityM.current.value,
            S:quantityS.current.value,
        }
        console.log("show details",shoeDetails)
        formctx.addToItems(shoeDetails)
    }
  return (
      <Container
        style={{
          backgroundColor: "#87847b",
          margin: "6rem auto",
          borderRadius: "5px",
          width: "450px",
          padding: "2rem",
        }}
      >
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Shoe</Form.Label>
            <Form.Control type="text" placeholder="Enter Shoe Name" ref={shoename}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Shoe details" ref={shoeDescription} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Price</Form.Label>
            <Form.Control type="Number" placeholder="Price" ref={shoeprice}/>
          </Form.Group>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Quantity L</Form.Label>
            <Form.Control style={{width:'5rem'}} type="Number" min={1} placeholder="L" ref={quantityL}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Quantity M</Form.Label>
            <Form.Control style={{width:'5rem'}} type="Number" min={1} placeholder="M" ref={quantityM} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Quantity S</Form.Label>
            <Form.Control style={{width:'5rem'}} type="Number" min={1} placeholder="S" ref={quantityS} />
          </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            Add Shoe
          </Button>
        </Form>
      </Container>
  );
};

export default FormInput;
