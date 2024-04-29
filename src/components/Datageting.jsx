import React, { forwardRef } from 'react'

 const Datageting= forwardRef( function Datageting({label,type},ref) {
   
  return (
  <>
   <label>{label}</label>
    <input 
     type={type}
     ref={ref}
     placeholder='enteryour name'
     />
      </>
  )
})

export default Datageting