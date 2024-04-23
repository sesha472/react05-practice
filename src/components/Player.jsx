import React,{ useRef,useState,useEffect } from "react";

export default function Player() {
  const enteredplayername=useRef()
  const [playername, setplayername] = useState(null);
    
  
   const submitHanlder=()=>{
    setplayername(enteredplayername.current.value); 
    enteredplayername.current.value='';
   }
   useEffect(() => {
    console.log( enteredplayername.current.value);
    enteredplayername.current.focus() 
   }, [])
   
  return (
    <section id="player">

      <h2>Welcome {  playername }</h2>
      <p>
        <input type="text" 
        ref={enteredplayername}
        />
        <button onClick={submitHanlder}>Set Name</button>
      </p>
    </section>
  );
}








// import React,{ useState } from "react";



// export default function Player() {
//   const [playername, setplayername] = useState('');
//   const [submited, setsubmited] = useState(false)
    
//   const inputchangeHanlder=(event)=>{
//     setsubmited(false)
//   setplayername(event.target.value)
//   }
//    const submitHanlder=()=>{
//     setsubmited(!submited);
//    }
//   return (
//     <section id="player">

//       <h2>Welcome {submited ? playername: "unknown entity"}</h2>
//       <p>
//         <input type="text" 
//         onChange={inputchangeHanlder}
//         value={playername}
//         />
//         <button onClick={submitHanlder}>Set Name</button>
//       </p>
//     </section>
//   );
// }
