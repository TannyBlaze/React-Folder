import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Event from './component/Event'
import SignIn from './pages/LogIn/SignIn'
import SignUp from './pages/Login/SignUp'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
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
import ClassComponent from './component/ClassComponent'
import FileUpload from './pages/FileUpload'

function App() {
  useEffect(() => {
    if ("ServiceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((reg) => console.log("Service worker registered"))
          .catch((err) => console.log("Service worker not registered", err));
      });
    }
  }, []);

  //let name = "edit"
  
  // const handleEdit = () => {
  //   alert("edit")
  // }

  // const handleDelete = () => {
  //   alert("delete")
  // }
  
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
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/class' element={<ClassComponent />} />
        <Route path='/formik' element={<Formik />} />
        <Route path='/upload' element={<FileUpload />} />
      </Routes>
      <Button title="edit" color="btn btn-success" />
      <Button title="delete" color="btn btn-danger" />
      <Button title="action" color="btn btn-warning" />
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
