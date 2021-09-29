import './App.css';
import Navbar from './components/Navbar/Navbar';
//https://reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Pages';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup'

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
