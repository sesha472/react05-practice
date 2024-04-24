import React,{useState,useRef} from 'react'
import ResultModal from './ResultModal';

function TimerChallange({title,targetTime}) {

  const timer=useRef();
  const dialog=useRef();

    const [timerstarted, settimerstarted] = useState(false);
    const [timerExpired, settimerExpired] = useState(false);
   
    const startHanlder=()=>{
     
      timer.current= setTimeout(() => {
            settimerExpired(true);
            dialog.current.showModal();
         }, targetTime*1000);

        settimerstarted(true)

    }
    
     const stopHandler=()=>{
      clearTimeout(timer.current)
     }
   
  return (
    <>
       <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        {timerstarted ? (
          <button onClick={stopHandler}>stop timer</button>
        ) : (
          <button onClick={startHanlder}>start timer</button>
        )}

        <p className={timerstarted ? "active" : undefined}>
          {timerstarted ? "time is runnig." : "timer is inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallange