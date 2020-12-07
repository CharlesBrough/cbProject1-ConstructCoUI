//CSS imports
import './css/styles.css';

//Component imports
import Showcase from './components/Showcase.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Showcase />
      <footer>ConstructCo 2020</footer>
    </div>
  );
}

export default App;
