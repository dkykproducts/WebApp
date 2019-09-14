import React, { Component } from 'react';
import sample_pic from './sample_pic.svg';

class Item extends Component {
  render() {
    return (
      <div className="card mr-3">
        <img src={sample_pic} className="card-img-top" alt="Sample_Pic" height="200" width="200"/>
        <div className="card-body">
            <p className="card-title">{this.props.Name}</p>
            <h5 className="card-text">{this.props.price}</h5>
        </div>
      </div>
    );
  }
}

export default Item;