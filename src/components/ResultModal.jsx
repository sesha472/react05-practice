

import {forwardRef, useImperativeHandle,useRef} from "react";
 
   
 const ResultModal= forwardRef( function ResultModal({result,targetTime},ref) {
  const dialog=useRef();
  useImperativeHandle(ref,()=>{
      return{
        fnametutu(){ 
          dialog.current.showModal();
        }
      }
    });

  return (
    <dialog ref={dialog} className="result-modal" >
      <h1>you {result}</h1>
      <p>
        the target time was <strong>{targetTime}</strong>
      </p>
      <p>
        you stoped the timer <strong>x seconds left</strong>
      </p>
      <form method="dialoug">
        <button>close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;