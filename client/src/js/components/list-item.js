import React, { Component } from 'react';
import InfoBtn from './info-btn.js';
import ApiPanel from './api-panel.js';

import Fade from '@material-ui/core/Fade';

class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false
        }
    }

    openPanel(e) {
        this.state.showPanel ? this.setState({showPanel: false}) : this.setState({showPanel: true});
    }

   render(){
      return(
        <li>
            <InfoBtn description={this.props.data.description}></InfoBtn> {this.props.data.name} 
            <button onClick={() => this.openPanel()}><strong>{this.props.data.type}</strong> Request</button>
            { this.state.showPanel ? <div className="apiPanelWrap"><ApiPanel {...this.props} /><button className="closeApiPanelBtn" onClick={() => this.openPanel()}>Close</button></div> : null }
        </li>
      );
   }
}
export default ListItem;