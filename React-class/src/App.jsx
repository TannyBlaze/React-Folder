import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Event from './component/Event'
import SignIn from './pages/Login/SignIn'
import SignUp from './pages/Login/SignUp'
import Fetch from './component/Fetch'
import UseEffect from './component/UseEffect'
import Home from './pages/Home'
import About from './pages/About'
// import Event from './pages/Event'
import Contact from './pages/Contact'
import Button from './component/Props/Button'
import { Route, Routes , Navigate } from 'react-router-dom'
import Test from './component/test'
import NotFound from './component/NotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Formik from './pages/Formik'

function App() {
  let name = "edit"

  const handleEdit = () => {
    alert("edit")
  }

  const handleDelete = () => {
    alert("delete")
  }
  
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      {/* <Test /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to= '/'/>} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/formik' element={<Formik />} />
      </Routes>
      {/*<Fetch />
      
      <Event />
      <SignIn />
      <SignUp />
      <UseEffect /> 
      <Button editFunction={handleEdit} name= {name} />
      <Button editFunction={handleDelete} name="delete" /> */}
    </div>
  )
}

export default App
