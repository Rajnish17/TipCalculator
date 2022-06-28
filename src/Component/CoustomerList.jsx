import React, { useState } from 'react'

const CoustomerList = () => {
    const[state,setState]=useState('')
   
    
  return (
    <div>
       <center> <h1>Coustomer List</h1> </center>
       <div>
      <ul className="list-group">
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
      </div>
   
    </div>
  )
}

export default CoustomerList