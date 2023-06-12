 
import './App.css';
import {BrowserRouter,Routes,Route} from'react-router-dom'
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import CartPage from './pages/CartPage';
import Wishlishts from './pages/Wishlishts';

function App() {
  return (
    <div>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/addProduct' element={<AddProduct />}/>
          <Route path='/carts' element={<CartPage />} />
          <Route path='/wishlisht' element={<Wishlishts />} />
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
