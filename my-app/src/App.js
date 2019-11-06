import React from 'react';
import Head from './components/head/Head';
import Home from './components/home/Home';
import Foot from './components/foot/Foot';
import Detail from './components/detail/Detail';
import Single from './components/single/Single';
import Login from './components/login/Login';

import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Route component={Head}/>
                    <Route component={Home}/>
                    <Route component={Foot}/>
                </Route>
                <Route path="/home" >
                    <Route component={Head}/>
                    <Route component={Home}/>
                    <Route component={Foot}/>
                </Route>
                <Route path="/detail">
                    <Route component={Head}/>
                    <Route component={Detail}/>
                </Route>
                <Route path="/single/:id">
                    <Route component={Head}/>
                    <Route component={Single}/>
                </Route>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
