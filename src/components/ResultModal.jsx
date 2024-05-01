

import {forwardRef, useImperativeHandle,useRef} from "react";
import { createPortal } from "react-dom";
 
   
 const ResultModal= forwardRef( function ResultModal({timeRemainng,targetTime},ref) {
  
  const timeresult = (timeRemainng <= 0);
  
  const score= Math.round((1 - timeRemainng/(targetTime*1000)) *100);
   
    let formatterseconds=(timeRemainng/1000).toFixed(2);
  
  const dialog=useRef();
  useImperativeHandle(ref,()=>{
      return{
        fnametutu(){ 
          dialog.current.showModal();
        }
      }
    });

  return  createPortal(
    <dialog ref={dialog} className="result-modal" >
      {timeresult?<h1 style={{color:"red"}}>you lost</h1>:<h1 style={{color:"green"}}>you win</h1>}
      {!timeresult && <strong>your score :  {score}</strong>}
      <p>
        the target time was <strong>{targetTime}</strong>
      </p>
      <p>
        you stoped the timer <strong>{formatterseconds} seconds left</strong>
      </p>
      <form method="dialoug">
        <button>close</button>
      </form>
    </dialog>,document.getElementById('modal')
  );
})

export default ResultModal;