import {useState } from 'react'
import Condition1 from './condition/condition1'
import Condition2 from './condition/condition2'
function Example(){
    const [value,setValue]= useState(0)
    return(
        <>
        <button onClick={e=>setValue(value+1)}>
           Click me: {value} 
             </button>
             {value%2==0?<Condition1></Condition1>:<Condition2></Condition2> }
        </>
    )
}
export default Example