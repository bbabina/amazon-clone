import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    //will only load once when the app component loads  
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // user just logged in or the user was logged in
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  
  return (
    // BEM
    <Router>
      <div className="app">
       
        <Switch>
           <Route path="/login"> 
           <Login /> {/* for header.js   making login component */}
          </Route>

          <Route path="/checkout"> 
             <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header /> {/* for header.js */}
            <Home /> {/* for Home.js */}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

