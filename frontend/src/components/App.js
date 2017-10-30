import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from  'react-router-dom'
import Home from '../views/Home'
import NewPost from '../views/NewPost'
import Post from '../views/Post'
import EditPost from '../views/EditPost'
import Nav from '../components/Nav'

//Page routes
//const HomeView = () =>(<Home/>)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <div className='container' style={{marginTop: 30}}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:category" component={Home}/>
            <Route path="/newpost" component={NewPost}/>
            <Route exact path="/post/:id" component={Post}/>
            <Route path="/post/edit/:id" component={EditPost}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
