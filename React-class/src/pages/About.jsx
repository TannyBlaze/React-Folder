import React from 'react'
import { useParams } from 'react-router-dom'
<h5></h5>
function About() {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <h1>More about {id} </h1>
    </div>
  )
}

export default About