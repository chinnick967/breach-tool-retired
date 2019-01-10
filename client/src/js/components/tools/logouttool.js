import React, { Component } from 'react';

class LogoutTool extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            
        }
    }

    logout(e) {
        fetch('/clear-session')
            .then(
                location.reload()
            )
    }

   render() {
      return(
        <span className="tool logout" onClick={this.logout}>

        </span>
      );
   }
}
export default LogoutTool;