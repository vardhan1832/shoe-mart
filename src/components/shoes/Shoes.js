import React , {useContext} from "react";
import { FormContext } from "../../store/formcontext";
import ShoeItem from "./ShowItem";
import { Container } from "react-bootstrap";

const Shoes = () =>{
    const formctx = useContext(FormContext)
    const shoeitems = formctx.items.map((shoe)=>{
        return <ShoeItem key={shoe.id} item={shoe}/>
    })
    return (
        <Container style={{margin:'3rem auto', padding:'1rem'}}>
        <h1>Available Shoes</h1>
        <ul style={{margin:'1rem auto'}}>
            {shoeitems}
        </ul>
        </Container>
    )
}

export default Shoes