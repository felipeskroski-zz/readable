import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = ({ post, posts, vote }) => (
    <div>
      <h2>Page not found</h2>
      <Link to='/'>Go to home</Link>
    </div>
)
export default NotFound
