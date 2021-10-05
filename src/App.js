
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Service from './Components/Service/Service';
import Trainers from './Components/Trainers/Trainers';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar></Navbar>
       <Switch>
         <Route exact path="/">
         <Home></Home>
         </Route>
          <Route exact path="/aboutus">
          <Aboutus></Aboutus>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/trainers">
            <Trainers></Trainers>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
