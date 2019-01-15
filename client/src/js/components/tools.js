import React, { Component } from 'react';
import LogTool from './tools/logtool.js';
import AccountTool from './tools/accounttool.js';
import LogoutTool from './tools/logouttool.js';

class Tools extends Component{
    constructor(props) {
        super(props);
        this.toggleTools = this.toggleTools.bind(this);

        this.state = {
            closed: true
        }
    }

    toggleTools(e) {
        if (e.target.classList.contains("tools")) {
            this.state.closed ? this.setState({closed: false}) : this.setState({closed: true})
        }
    }

   render() {
      return(
        <div className={"tools " + (this.state.closed ? "closed" : "")} onClick={this.toggleTools}>
            <LogTool />
            <AccountTool />
            <LogoutTool />
        </div>
      );
   }
}
export default Tools;