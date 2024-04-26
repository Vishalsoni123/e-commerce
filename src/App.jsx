
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import Otppage from './components/Otppage/Otppage';
import Wishlist from './components/Wishlist/Wishlist';



  function App() {
  const [count, setCount] = useState(0)
  const [addCart,setaddCart]=useState([])
  const item = (cart)=>{
    setaddCart([...addCart, cart])
  }
  console.log(addCart);
  return (
    <>
   <Router>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Homepage item={item} />}/>
    <Route path='men' element={<Men/>}/>
    <Route path='women' element={<Women/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Otppage' element={<Otppage/>}/>
    <Route path='Wishlist'  element={<Wishlist  addCart={addCart}/>}  />
    </Routes>
    <Footer/>
   </Router>

    </>
  )
}

export default App
