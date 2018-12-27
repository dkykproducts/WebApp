import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div class="list-group">
                    <Item />
                </div>
            </div>
        )
    }
}

export default Home;
