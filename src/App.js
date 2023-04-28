import "./App.css";
import Contactus from "./Components/Contactus";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router> */}
        <Navbar />
        {/* <Switch>
          <Route path="/contactus"> */}
            <Content maintitle="Contact Us" />
            <Contactus />
          {/* </Route>
        </Switch> */}
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
