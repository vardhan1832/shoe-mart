import React, {useState} from 'react';
import './App.css';
import FormInput from './components/Form/Form';
import NavbarComponent from './components/Layout/Navbar';
import Cart from './components/Cart/Cart';
import Shoes from './components/shoes/Shoes';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const modalHandler = () =>{
    setModalShow(true)
  }
  return (
    <div className="App">
      <NavbarComponent onshowmodal={modalHandler}/>
      <FormInput/>
      <Shoes/>
      <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
