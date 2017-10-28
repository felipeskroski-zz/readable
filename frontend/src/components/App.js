import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { fetchCategories } from '../utils/api'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount(){
    const {requestCategories} = this.props
    requestCategories()
  }

  renderCategories(){
    const {categories} = this.props.categories
    console.log('props')
    console.log(categories)
    if(categories){
      return(
        <ul>
          {categories.map((c, index) => (
            <li key={index}>{c.name}</li>
          ))}
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        {this.renderCategories()}
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories,
    posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestCategories: () => dispatch(fetchCategories()),
    //remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
