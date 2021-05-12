import React from 'react'
import Layout from './Common/Layout/index'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Route path="/" component={Layout}/>
    </Router>
    </>
  );
}

export default App;
