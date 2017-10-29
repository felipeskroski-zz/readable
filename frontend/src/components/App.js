import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from  'react-router-dom'
import Home from '../views/Home'
import NewPost from '../views/NewPost'
import Post from '../views/Post'

//Page routes
const HomeView = () =>(<Home/>)
const NewPostView = () =>(<NewPost/>)
const PostView = () =>(<Post/>)

class App extends Component {

  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path="/" component={HomeView}/>
          <Route path="/newpost" component={NewPost}/>
          <Route path="/post/:id" component={Post}/>
        </div>
      </Router>
    );
  }
}

export default App
