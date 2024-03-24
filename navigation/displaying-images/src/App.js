import Logo from "./assests/images/shady.JPG"


function App() {
  return (
    <div className="App">
      <h1>Task: add three images with some styling</h1>
      <img
        height={200}
        src={Logo}
        alt="Logo"
      />
    </div>
    
  );
}

export default App;
