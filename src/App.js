//CSS imports
import './App.css';
import './css/styles.css';

//Component imports
import Showcase from './components/Showcase.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="react-container">
      {/* import bootstrap */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossOrigin="anonymous"
      />
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
