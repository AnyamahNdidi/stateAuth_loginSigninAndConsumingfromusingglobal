import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Register from "./Componets/Registration/Register"
import Header from './Componets/Header/Header';
import Homescreen from './Componets/HomeScreen/Homescreen';
import Course from './Componets/Course/Course';
import Study from './Componets/Study/Study';
import { AppProvider } from "./Componets/ContextApi/AuthState"
import PrivateRoute from "./Componets/PrivateRoute/PrivateRoute"


function App() {
  return (
    <>


      <AppProvider>
        <Router>

          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Header} />
            <Route exact path="/" component={Homescreen} />
            <PrivateRoute exact path="/course" component={Course} />
            <Route exact path="/study" component={Study} />
          </Switch>
        </Router>
      </AppProvider >

    </>
  );
}

export default App;
