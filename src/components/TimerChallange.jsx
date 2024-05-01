import {useState,useRef} from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallange({title,targetTime}) {

  const timervariable=useRef();
  const dialog=useRef();

    const [timeRemainng, settimeRemainng] = useState(targetTime*1000)
  

     const timerIsRunning= timeRemainng > 0 && timeRemainng < (targetTime*1000) ;
      
     if(timeRemainng <=0){
      clearInterval(timervariable.current);
       settimeRemainng(targetTime*1000);
        dialog.current.fnametutu();

     }

    const startHanlder = () => {
      timervariable.current = setInterval(() => {
        settimeRemainng(prvtimer=>prvtimer-10)
     
      },  10);

    };

    const stopHandler = () => {
      dialog.current.fnametutu();
      clearInterval(timervariable.current);
    };
   
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} timeRemainng={timeRemainng}  />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <button onClick={timerIsRunning ? stopHandler : startHanlder}>
          {timerIsRunning ? "stop" : "start"} timer
        </button>

        <p className={timerIsRunning ? "active" : undefined}>
          {timerIsRunning ? "time is runnig." : "timer is inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallange