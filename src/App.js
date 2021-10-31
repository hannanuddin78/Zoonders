import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import homePage from './pages/homePage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={homePage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
