import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/user/Home'
import { Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
