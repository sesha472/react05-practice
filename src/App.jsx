import { useRef } from 'react';
import Datageting from './components/Datageting.jsx';
import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx'


export const datafromuser={
  name:'',
  age:0
}
function App() {

  const inputname=useRef();
  const inputage=useRef();

   const datasumbitHandler=()=>{
    let {name,age}=datafromuser;
       name=inputname.current.value
       age= Number(inputage.current.value) //if we want data as number we have to use NUmber fun

      console.log(name);
      console.log(typeof age);
      console.log(age);
    
   }
  return (

    <>
    <Datageting type="text" label="enter your name" ref={inputname} />
    <br/>
    <br/>
    <Datageting  type="number" label="enter your age" ref={inputage} />
    <br/>
    <br/>
    <button onClick={datasumbitHandler}>submit data</button>
    

      {/* <Player /> */}
      {/* <div id="challenges"> 
      <TimerChallange title='Easy' targetTime={1}/>
      <TimerChallange title='not easy' targetTime={3}/>
      <TimerChallange title='getting tough' targetTime={10}/>
      <TimerChallange title="pro's only" targetTime={15}/>
      
      </div> */}
    </>
  );
}

export default App;
