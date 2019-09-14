import React, { Component } from 'react';
import Item from './Item';


class Items extends Component {

  componentDidMount(){
    console.log("Items mounted!!!")
  }
    
  render() {
    const e=this.props.data[0]
    const output=this.props.data?this.props.data.map(e=>{
      return <Item Name={e.Name} price={e.price} key={e.key} />
    }):''

    return (
      <div>
        {output?output:<p>No Data</p>}
      </div>
    );
  }
}

export default Items;