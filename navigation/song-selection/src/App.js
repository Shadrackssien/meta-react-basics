import ReactPlayer from "react-player";
import './App.css';

function App() {

  const vidUrl = "https://www.youtube.com/watch?v=FZzchDH5S_U";

  return (
    <div className="App">
      <h1>React Player example</h1>
      <ReactPlayer
        url={vidUrl}
        playing={false}
        volume={0.5} 
      />
    </div>
  );
}

export default App;
