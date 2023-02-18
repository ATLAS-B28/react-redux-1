import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,
         decrement ,
         reset,
         incrementByAmount
       } from './counterSlice'
import { useState } from 'react'
const Counter = () => {
    //add state to component
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount,setIncrementAmount] = useState(0)
    const addValue= Number(incrementAmount) || 0  //text input
    //resetall
    const resetAll = ()=>{
        setIncrementAmount(0)
        dispatch(reset())
    }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <input 
        type="text" 
        value={incrementAmount}
        onChange={(e)=>setIncrementAmount(e.target.value)}

       />
       <div>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>
            Add Amount 
        </button>{/**this addValue will check fro num
         *  and then it will be the payload on the action   */}
         <button onClick={resetAll}>
            Reset
        </button>
       </div>
    </section>
  )
}

export default Counter
