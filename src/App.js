import './App.css';
import Header from './MyComponents/Header'
import Watch from './MyComponents/Watch'
import About from './MyComponents/About'
import Footer from './MyComponents/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" render={() => {
          return (
            <>
              <Watch />
            </>)
        }} >
        </Route>
        <Switch>
          <Route exact path="/About" render={() => {
            return (
              <>
                <About />
              </>)
          }} >
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
