//CSS imports
import "./App.css";

//Importing from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component imports
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Showcase from "./components/pages/Showcase.js";
import FormPage from "./components/pages/FormPage.js";
import ViewPage from './components/pages/ViewPage.js';
import Error404 from './components/pages/Error404.js';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Showcase} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/view" component={ViewPage} />
          <Route path="/" component={Error404} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
