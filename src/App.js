//CSS imports
import "./App.css";

//Importing from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component imports
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Showcase from "./components/pages/Showcase.js";
import FormPage from "./components/pages/form-page/FormPage.js";
import ViewPage from "./components/pages/view-page/ViewPage.js";
import LoginPage from "./components/pages/login-page/LoginPage.js";
import Error404 from "./components/pages/Error404.js";

//Importing necessary components for notifications through react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Showcase} />
            <Route exact path="/form" component={FormPage} />
            <Route path="/form/:passedAction/:employeeName" exact component={FormPage} />
            <Route exact path="/view" component={ViewPage} />
            <Route exact path="/user" component={LoginPage} />
            <Route path="/" component={Error404} />
          </Switch>
        </div>
        <Footer />
        <ToastContainer
          position="bottom-center"
        />
      </Router>
    </>
  );
}

export default App;
