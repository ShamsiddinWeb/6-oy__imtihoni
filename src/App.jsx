import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/not-found/NotFound'
// import SingleRoute from './pages/single-route/SingleRoute'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import Single from "./pages/Single-router/Single";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Single/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Login/>}/>
      {/* <Route path='/product/:id' element={<SingleRoute/>}/> */}

      <Route path='/' element={<Auth/>}>
        <Route path='admin' element={<Admin/>}/>
          
      </Route>

      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
