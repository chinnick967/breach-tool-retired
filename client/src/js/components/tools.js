import React, { Component } from 'react';
import LogTool from './tools/logtool.js';

class Tools extends Component{
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

   render() {
      return(
        <div className="tools">
            <LogTool />
        </div>
      );
   }
}
export default Tools;