import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({ post, posts, vote }) => (
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
      <div class="container d-flex justify-content-between">
        <Link className="navbar-brand" to='/'>Readable</Link>
        <Link to='/newpost' className="btn btn-primary" >New Post</Link>
      </div>
    </nav>
)
export default Nav
