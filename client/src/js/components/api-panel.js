import React, { Component } from 'react';
import ApiForm from './api-form.js';

class ApiPanel extends Component{
    constructor(props) {
        super(props);
        this.showResponsePanel = this.showResponsePanel.bind(this);
        this.state = {
            showResponse: false,
            response: null
        }
    }

    showResponsePanel(bool, response) {
        this.setState({
            showResponse: bool,
            response: response
        })
    }

   render(){
      return(
        <div className="modal">
            <div className="panel container" responseopen={this.state.showResponse.toString()}>
                <h3>Submit a Request</h3>
                <small className="form-note">{this.props.data.note ? this.props.data.note : null}</small>
                <ApiForm showResponsePanel={this.showResponsePanel} data={this.props.data} />
            </div>
            {this.state.showResponse ?
                <div className="panel container response">
                    <h3>Response</h3>
                </div> 
                : null
            }
        </div>
      );
   }
}
export default ApiPanel;