import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import Carddetails from './Carddetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './Demo';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Products />} />
    //     <Route path='/abc' element={<Cart />} />
    //     <Route path='/xyz/:id' element={< Carddetails/>} />  
    //   </Routes>
    // </BrowserRouter>
    <>
    <Demo/>
    </>

  );
}

export default App;
