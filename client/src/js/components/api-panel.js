import React, { Component } from 'react';
import ApiForm from './api-form.js';

class ApiPanel extends Component{
   render(){
      return(
        <div className="modal">
            <div className="panel container">
                <h3>Submit a Request</h3>
                <small className="form-note">{this.props.data.note ? this.props.data.note : null}</small>
                <ApiForm data={this.props.data} />
            </div>
        </div>
      );
   }
}
export default ApiPanel;