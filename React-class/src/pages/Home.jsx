import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/Counter'

function Home() {
  const count = useSelector((state) => state.counterReducer.count)
  console.log(count);
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button className='btn btn-success' onClick={() => dispatch(increment())}>Increment</button>
        <button className='btn btn-danger' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
    
  )
}

export default Home