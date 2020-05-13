import React from 'react';
import {
  Link
} from "react-router-dom";

const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}

function Home() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <div>This is Home!</div>
      <Link to='/About'>About</Link>
      <br></br>
      <Link to='/CommentApp'>CommentApp</Link>
    </div>
  );
}
export default Home;

