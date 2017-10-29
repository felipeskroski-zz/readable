import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from  'react-router-dom'
import Home from '../views/Home'
import NewPost from '../views/NewPost'
import Post from '../views/Post'
import EditPost from '../views/EditPost'

//Page routes
//const HomeView = () =>(<Home/>)

class App extends Component {

  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path="/" component={Home}/>
          <Route path="/newpost" component={NewPost}/>
          <Route exact path="/post/:id" component={Post}/>
          <Route path="/post/edit/:id" component={EditPost}/>
        </div>
      </Router>
    );
  }
}

export default App
