import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Footer/>
      <Promo/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
    </div>
  );
}

export default App;
