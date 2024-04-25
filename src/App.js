import './App.css';
import { Navbar} from './component/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { NotFoundPage } from './pages/NotFoundPage';
import {Projects} from './pages/Projects';
import { Project } from './pages/Project';
import { PortfolioContext } from './context/portfolioContext'
import { projectData } from './utils/data';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Products } from './pages/Products';
import { Product } from './pages/Product';

function App() {
  return (
    <>
      <PortfolioContext.Provider value={{projectData}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/project/:id" element={<Project/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/product/:id" element={<Product/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>  
      </PortfolioContext.Provider>
    </>
  );
}

export default App;
