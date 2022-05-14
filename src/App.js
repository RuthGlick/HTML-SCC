import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LogIn from "./components/LogIn";
import Application from "./components/Application";

function App() { 
  return (
    <Router>
        <Switch>
          <Route path="/Application/users/:id">
            <Application />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
          <Redirect to="/login" />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
