import React from 'react';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <div>This is Home!</div>
      <Link to='/About'>About</Link>
    </div>
  );
}
export default Home;

