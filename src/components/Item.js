import React, { Component } from 'react';
import sample_pic from './sample_pic.svg';

class Item extends Component {
  render() {
    return (
      <div className="card mr-3">
        <img src={sample_pic} className="card-img-top" alt="Sample_Pic" height="200" width="200"/>
        <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">This is a card para</p>
            <p className="card-text">time</p>
        </div>
      </div>
    );
  }
}

export default Item;