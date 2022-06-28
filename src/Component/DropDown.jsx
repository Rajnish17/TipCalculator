import React from 'react'


const DropDown = () => {

  return (
    <div>
  
   <select>
      <option className='disabled'>...Choose</option>
      <option>
      bad (5%)
      </option>
      <option>
      Moderate (10%)
      </option>
      <option>
      Excellent (20%)
      </option>
     
      </select>
      <div className='mx-5 mt-2'> </div>
      <input   placeholder='Enter coustomer name'
       type={"text"}></input>
      <button  className='btn btn-success mx-5'> Add Coustomer</button>
   
      
  </div>
  )
}

export default DropDown