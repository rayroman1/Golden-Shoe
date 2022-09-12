
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Home from "./Home";
import Signin from "./Signin";
import NotPage from "./NotPage";
import ViewAll from "./ViewAll";
import AddItem from "./AddItem";

function App() {
  
  return (
  
    <div className="App">
      
     

    <BrowserRouter>
    <Header />
    <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="viewall" element={<ViewAll />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="*" element={<NotPage />} />
        </Route>
      </Routes>
      <Footer note="Info" />
    </BrowserRouter>
      </div>
  );
}

export default App;
