import React , {useEffect, useState} from "react";

export const CartContext = React.createContext({
    totalPrice:0,
    items:[],
    addToCart:(item)=>{},
    removeProduct:(id)=>{},
    orderCart:()=>{}
})

const CartProvider = (props) =>{  
  
    const addItemHandler = async (item) =>{
        const existingitemindex = cartcontext.items.findIndex((obj) => {
            return obj.id === item.id;
          });
          if (existingitemindex !== -1) {
            let newitem = {
              ...cartcontext.items[existingitemindex],
              Amount: Number(cartcontext.items[existingitemindex].Amount) + Number(item.Amount) ,
            };
            cartcontext.items[existingitemindex] = newitem;
          } else {
            cartcontext.items.push(item);
          }
          cartcontext.totalPrice += Number(item.price)*Number(item.Amount);
          await fetch('https://crudcrud.com/api/4eb8e75d1aa84325a4311bd9dfab960e/products',{
            method:'POST',
            body:JSON.stringify({items:cartcontext.items,totalPrice:cartcontext.totalPrice}),
            headers:{
                'Content-Type':'application/json'
            }
          })
          setCart({ ...cartcontext });
    }

    const removeProductHandler = async (id) =>{
        const existingitemindex = cartcontext.items.findIndex((obj) => {
            return obj.id === id;
        });
        cartcontext.totalPrice = cartcontext.totalPrice - Number(cartcontext.items[existingitemindex].price)*Number(cartcontext.items[existingitemindex].Amount)
        const updateditems = cartcontext.items.filter((item)=>{
            return item.id!==cartcontext.items[existingitemindex].id;
        })
        cartcontext.items = [...updateditems]
        await fetch('https://crudcrud.com/api/4eb8e75d1aa84325a4311bd9dfab960e/products',{
            method:'POST',
            body:JSON.stringify({items:cartcontext.items,totalPrice:cartcontext.totalPrice}),
            headers:{
                'Content-Type':'application/json'
            }
          })
        setCart({...cartcontext})
    }
    const orderHandler =async () =>{
        cartcontext.items = []
        cartcontext.totalPrice = 0
        await fetch('https://crudcrud.com/api/4eb8e75d1aa84325a4311bd9dfab960e/products',{
            method:'POST',
            body:JSON.stringify({items:cartcontext.items,totalPrice:cartcontext.totalPrice}),
            headers:{
                'Content-Type':'application/json'
            }
          })
        setCart({...cartcontext})
    }
    const cartcontext = {
        totalPrice: 0,
        items: [],
        addToCart: addItemHandler,
        removeProduct: removeProductHandler,
        orderCart: orderHandler
    }
    const [cart, setCart] = useState(cartcontext);
    const fetchdata =async () =>{
        const res = await fetch('https://crudcrud.com/api/4eb8e75d1aa84325a4311bd9dfab960e/products',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json()
        if(data.length > 0){
            cartcontext.items = data[data.length-1].items;
            cartcontext.totalPrice = data[data.length-1].totalPrice;
            setCart({...cartcontext})
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return (
        <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider