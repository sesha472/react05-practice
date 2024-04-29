import React,{useRef} from 'react'

function Datageting() {

    const username = useRef('');

    const submitHandler=()=>{
      console.log(username.current.value);
    }
    
  return (
  <>
  <p>hi</p>
    <input 
     ref={username}
     type='text'
     placeholder='enteryour name'
     />
     <br/>
     <br/>
     <button onClick={submitHandler}>submit</button>
      </>
  )
}

export default Datageting