import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({ post, posts, vote }) => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand" to='/'>Readable</Link>
        <Link to='/newpost/' className="btn btn-primary" >New Post</Link>
      </div>
    </nav>
)
export default Nav
