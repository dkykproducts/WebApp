import React, { Component } from 'react';
import sample_pic from './sample_pic.svg';

class Item extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-9">
                <img src={sample_pic} alt=""  />
                <h4>This is heading</h4>
                <p>This is some content</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
                <h4>This is heading</h4>
                <p>This is some content</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
                <h4>This is heading</h4>
                <p>This is some content</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
                <h4>This is heading</h4>
                <p>This is some content</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
                <h4>This is heading</h4>
                <p>This is some content</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Item;