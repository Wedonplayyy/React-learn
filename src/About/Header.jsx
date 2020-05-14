import React, { Component } from 'react'
class Header extends Component {
  constructor() {
    super();
    console.log('construct');
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentWillMount() {
    console.log('component will mount');
  }

  componentWillUnmount() {
    console.log('component will unmount');

  }

  render() {
    console.log('render');
    return (
      <div>
        <h1 className='title'>header</h1>
      </div>
    );
  }
}

export default Header;