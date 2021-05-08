import React from 'react'
import Layout from './Common/Layout/index'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Home from './Pages/Home/index'

function App() {
  return (
    <>
    <Router>
    <Route path="/" component={Layout}/>
    <Redirect from="/" to="/Home" />
    <Route path="/Home" component={Home}/>
    </Router>
    </>
  );
}

export default App;
