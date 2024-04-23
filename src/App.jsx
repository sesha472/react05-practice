import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange'

function App() {
  return (
    <>
      <Player />
      <TimerChallange title='Easy' targetTime={1}/>
      <TimerChallange title='not easy' targetTime={5}/>
      <TimerChallange title='getting tough' targetTime={10}/>
      <TimerChallange title="pro's only" targetTime={25}/>
      <div id="challenges"> </div>
    </>
  );
}

export default App;
