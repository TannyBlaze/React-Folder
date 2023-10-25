import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  const signup = () => {
    alert("signup")
    navigate("/")
  }
  return (
    <div>
      <button onClick={signup}>Signup</button>
    </div>
  )
}

export default Contact