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
            <Route exact path="/new/post" component={NewPost}/>
            <Route exact path="/:category/:post_id" component={Post}/>
            <Route exact path="/post/edit/:id" component={EditPost}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
