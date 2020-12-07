// import './App.css';
import './css/styles.css';
import Showcase from './components/Showcase.js';
import Header from './components/Header.js';

//using just class= doesn't work for some reason
//react probably has its own way of rendering this JSX stuff
function App() {
  return (
    <div className="react-container">
      {/* import bootstrap */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
      {/* import fontawesome */}
      <script
        src="https://kit.fontawesome.com/d0feb81fc3.js"
        crossorigin="anonymous"
      ></script>
      <Header />
      <Showcase />
      <footer>ConstructCo 2020</footer>
    </div>
  );
}

export default App;
