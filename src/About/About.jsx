import React from 'react';
import LikeButton, { A } from '../LikedButton/LikeButton'
import {
  Link
} from "react-router-dom";

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      likedText: '已赞',
      unlikedText: '赞'
    }
  }

  handleClickOnChange() {
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
  }
  render() {
    return (
      <div>
        <div>This is About!{A}</div>
        <LikeButton likedText={this.state.likedText}
          unlikedText={this.state.unlikedText}></LikeButton>
        <button onClick={this.handleClickOnChange.bind(this)}>
          修改 wordings
          </button>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default About;