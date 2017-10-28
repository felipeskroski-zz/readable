import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from  'react-router-dom'
import Home from '../views/Home'

//Page routes
const HomeView = function(){
  return(
    <Home/>
  )
}

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={HomeView}/>
        {/*<Route path="/newpost" component={NewPost}/>*/}
      </Router>
    );
  }
}

export default App
