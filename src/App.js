import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import About from './component/About/About';
import './App.css';
import Contact from './component/Contact/Contact';

function App() {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home services={services}></Home>
          </Route>
          <Route path="/home">
            <Home services={services}></Home>
          </Route>
          <Route path="/services">
            <Services services={services}></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
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
