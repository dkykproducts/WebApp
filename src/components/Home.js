import React, { Component } from 'react';
import Item from './Item';
import Carousel from './Carousel';

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div class="card-desk">
                    <Carousel/>
                    <br/><br/><br/>
                    <div className="card-group">
                        <Item />
                        <Item/>
                        <Item/>
                    </div>
                </div>
                
                <br/><br/><br/>
            </div>
        )
    }
}

export default Home;
