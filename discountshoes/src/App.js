import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signin from './components/Signin'
import Header from './components/Header'
import Footer from './components/Footer'
import Menubar from './components/Menubar'
import Mens from './components/Mens'
import Womens from './components/Womens'
import Girls from './components/Girls'
import Boys from './components/Boys'
import Home from './components/Home'
import CartPage from './components/CartPage'

import 'C:/React/discountshoes/src/components/style/Navbar.css';
function App() {
  return (
    <>

    
 
  <Router>
  <Header/>
  <Menubar/>
  
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Womens' element={<Womens />} />
        <Route path='/Boys' element={<Boys />} />
        <Route path='/Girls' element={<Girls />} />
        
   
      <Route path='/Signin'  element={<Signin />} />

      </Routes>
    </Router>
  
  <Footer/>
    </>
  );
}

export default App;
