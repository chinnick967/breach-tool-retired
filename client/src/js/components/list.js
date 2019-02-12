import React, { Component } from 'react';
import ListItem from './list-item.js';

class List extends Component{
   constructor(props) {
      super(props);
      this.state = {
         user: this.props.user
      }
   }
   render() {
      return(
         <div className="list container">
            <h3>User Accounts</h3>
            <ul>
               {Object.keys(this.props.data).map(key => (
                  <ListItem user={this.state.user} key={key} data={this.props.data[key]} />
               ))}
            </ul>
         </div>
      );
   }
}
export default List;