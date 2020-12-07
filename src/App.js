//CSS imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';

//Component imports
import Showcase from './components/Showcase.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="app-container">
      {/* import fontawesome */}
      <script
        src="https://kit.fontawesome.com/d0feb81fc3.js"
        crossOrigin="anonymous"
      ></script>
      <Header />
      <Showcase />
      <footer>ConstructCo 2020</footer>
    </div>
  );
}

export default App;
