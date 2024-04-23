import React,{useState} from 'react'

function TimerChallange({title,targetTime}) {
    const [timerstarted, settimerstarted] = useState(false);
    const [timerExpired, settimerExpired] = useState(false);

    const startHanlder=()=>{
        settimerstarted(true)
        setTimeout(() => {
            settimerExpired(true);
        }, targetTime*1000);
    }

   
  return (
    <section className="challenge">
      
      <h2>{title}</h2>
     
     {timerExpired && <p>you lost </p>}
    
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>

    {timerstarted ?  <button onClick={startHanlder}>stop timer</button>:
      <button onClick={startHanlder}>start timer</button>}
      
    <p className={timerstarted?'active':undefined}>
        {timerstarted ?'time is runnig...':'timer is inactive'}</p>
    </section>
  );
}

export default TimerChallange