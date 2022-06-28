import React, { useState } from 'react'
import DropDown from './DropDown'

const Header = () => {

  const[input,setInput]= useState('')

       const  handleChange=(event)=>{
  setInput(event.target.value)
  
}

  return (
    <div>
   
        <center> 
          <h1>Tip Calculator</h1>  
          </center>
          
          <form>
        <div className="mb-1">
          <label  className="form-label">Enter your Bill Amout</label>
          <input onChange={handleChange} type="number" className="form-control"   />
        </div>
      </form>
      <div className="mb-3">
          How was the service
        </div>
        <DropDown/>
       
    </div>
  )
}

export default Header