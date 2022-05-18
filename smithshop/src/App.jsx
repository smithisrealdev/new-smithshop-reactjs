import WapperProduct from '../components/WapperProduct'
import ListProduct from '../components/Product/ListProduct'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, AnimateSharedLayout } from "framer-motion";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <div className='h-screen'>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<div className='xl:px-28 xl:py-12 lg:p-12 md:p-8 sm:p-4 bg-main'> <Home />  </div>} />
        </Routes> */}
        <motion.div
          className='bg-search h-screen w-screen px-20 py-10'>
          <WapperProduct />
          {/* <ListProduct /> */}
        </motion.div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
