import './App.css';
import Grid from './components/Grid';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-body-tertiary">
      <Navbar/>
      <Hero/>
      <Grid/>
    </div>
  );
}

export default App;
