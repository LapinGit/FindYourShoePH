import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import copgarden_banner from './Components/Assets/banner1.jpg'
import shoegame_banner from './Components/Assets/banner2.jpg'
import aftermarket_banner from './Components/Assets/banner3.jpg'
import Bookmark from './Pages/Bookmark';

function App() {
  return (
<div >
  <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/CopGarden' element={<Category banner={copgarden_banner} category="CopGarden" />}/>
      <Route path='/ShoeGame' element={<Category banner={shoegame_banner} category="ShoeGame" />}/>
      <Route path='/AfterMarket' element={<Category banner={aftermarket_banner} category="AfterMarket" />}/>

      <Route path="/Product" element={<Product/>}> <Route path=':productId' element={<Product/>}/> </Route>

      <Route path='/Bookmark' element={<Bookmark/>} />

      </Routes>
      <Footer/>
  </BrowserRouter>
</div>
  );
}

export default App;
