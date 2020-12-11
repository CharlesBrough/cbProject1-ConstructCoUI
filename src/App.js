//CSS imports
import "./App.css";

//Importing from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component imports
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Showcase from "./components/pages/Showcase.js";
import FormPage from "./components/pages/form-page/FormPage.js";
import ViewPage from './components/pages/view-page/ViewPage.js';
// import LoginPage from './components/pages/LoginPage.js';
import LoginPage from './components/pages/login-page/LoginPage.js';
import Error404 from './components/pages/Error404.js';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Showcase} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/view" component={ViewPage} />
          <Route exact path="/user" component={LoginPage} />
          <Route path="/" component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
