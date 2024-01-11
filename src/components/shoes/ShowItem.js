import React ,{ useState , useContext}  from "react";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "../../store/cartcontext";

const ShoeItem = (props) =>{
    const cartctx = useContext(CartContext)
    const [L,setL] = useState(props.item.L)
    const [M,setM] = useState(props.item.M)
    const [S,setS] = useState(props.item.S)
    const Lhandler = () =>{
        if(L===0){
            alert('This size of the product is currently unavailable')
        }else{
            cartctx.addToCart({...props.item,Amount:1})
            setL(l=>{
                return l-1
            })
        }
    }
    const Mhandler = () =>{
        if(M===0){
            alert('This size of the product is currently unavailable')
        }else{
            cartctx.addToCart({...props.item,Amount:1})
            setM(m=>{
                return m-1
            })
        }
    }
    const Shandler = () =>{
        if(S===0){
            alert('This size of the product is currently unavailable')
        }else{
            cartctx.addToCart({...props.item,Amount:1})
            setS(s=>{
                return s-1
            })
        }
    }
    return (
        <Container style={{backgroundColor:'#222', color:'white', borderRadius:'6px',margin:'4px'}}>
            <li style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',padding:'7px'}}>
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <h4>${props.item.price}</h4>
                <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <h4 style={{marginRight:'3px'}}>Size: </h4>
                    <p style={{marginTop:'7px'}}>L:{L} <Button variant="outline-light" onClick={Lhandler}>Add</Button></p>
                    <p style={{marginTop:'7px'}}>M:{M} <Button variant="outline-light" onClick={Mhandler}>Add</Button></p>
                    <p style={{marginTop:'7px'}}>S:{S} <Button variant="outline-light" onClick={Shandler}>Add</Button></p>
                </div>
            </li>
        </Container>
    )
}

export default ShoeItem