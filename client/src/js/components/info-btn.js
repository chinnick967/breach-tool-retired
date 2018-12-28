import React, { Component } from 'react';

class InfoBtn extends Component{
   render(){
      return(
        <span className="info">
            ?
            <div className="description">{this.props.description}</div>
        </span>
      );
   }
}
export default InfoBtn;