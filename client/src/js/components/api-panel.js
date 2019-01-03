import React, { Component } from 'react';
import ApiForm from './api-form.js';

class ApiPanel extends Component{
    constructor(props) {
        super(props);
        this.showResponsePanel = this.showResponsePanel.bind(this);
        this.showResponseData = this.showResponseData.bind(this);
        this.nestedKeys = this.nestedKeys.bind(this);
        this.state = {
            showResponse: false,
            response: null,
            responseStatus: "Waiting for response..."
        }
    }

    showResponsePanel(bool) {
        this.setState({
            showResponse: bool
        })
    }

    showResponseData(response) {
        this.setState({
            response: response
        });
    }

    nestedKeys(json) {
        if (typeof json == "object") {
            var arr = Object.keys(json).sort();
            return arr.map(key => {
                if (typeof json[key] == "object") {
                    return <li><strong>{key}: </strong><ul>{this.nestedKeys(json[key])}</ul></li>
                } else {
                    return <li><strong>{key}: </strong>{this.nestedKeys(json[key])}</li>
                }
            });
        } else {
            return <span>{json.toString()}</span>
        }
    }

   render(){
      return(
        <div className="modal">
            <div className="panel container" responseopen={this.state.showResponse.toString()}>
                <h3>Submit a Request</h3>
                <small className="form-note">{this.props.data.note ? this.props.data.note : null}</small>
                <ApiForm showResponseData={this.showResponseData} showResponsePanel={this.showResponsePanel} data={this.props.data} />
            </div>
            {this.state.showResponse ?
                <div className={"panel container response " + (this.state.response == null ? "" : "done")}>
                    <h3>Response</h3>
                    <ul className="responseData">
                        {this.state.response != null ? this.nestedKeys(this.state.response) : null}
                    </ul>
                </div> 
                : null
            }
        </div>
      );
   }
}
export default ApiPanel;