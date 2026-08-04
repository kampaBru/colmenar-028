import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Origen from './pages/Origen'
import Collection from './pages/Collection'
import Contacto from './pages/Contacto'
import Product from './pages/Product'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/origen" element={<Origen />} />
        <Route path="/coleccion" element={<Collection/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path='/product' element={<Product />}  />
        
        
      </Routes>

      <Footer />
    </>
  )
}

export default App