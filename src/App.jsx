import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/user/Home'
import AllProducts from './pages/user/AllProducts';
import ProductCategory from './pages/user/ProductCategory';
import ProductDetails from './pages/user/ProductDetails';
import Cart from './pages/user/Cart';
import AddAddress from './pages/user/AddAddress';
import MyOrders from './pages/user/MyOrders';
import { Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
