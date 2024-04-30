import {useState,useRef} from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallange({title,targetTime}) {

  const timervariable=useRef();
  const dialog=useRef();

    const [timerstarted, settimerstarted] = useState(false);
    const [timerExpired, settimerExpired] = useState(false);
   
    const startHanlder=()=>{
    
      timervariable.current= setTimeout(() => {
            settimerExpired(true);
            dialog.current.fnametutu();
         }, targetTime*1000);

        settimerstarted(true);

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

        <button onClick={timerstarted ? stopHandler : startHanlder}>
          {timerstarted ? "stop" : "start"} timer
        </button>

        <p className={timerstarted ? "active" : undefined}>
          {timerstarted ? "time is runnig." : "timer is inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallange