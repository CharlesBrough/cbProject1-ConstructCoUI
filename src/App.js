//CSS imports
import "./App.css";

//Importing from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component imports
import Showcase from "./components/pages/Showcase.js";
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Showcase />
          <footer>ConstructCo 2020</footer>
        </Route>
        <Route path="/" render={() => <h1>404!</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
