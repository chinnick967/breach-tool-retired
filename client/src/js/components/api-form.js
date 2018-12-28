import React, { Component } from 'react';

class ApiForm extends Component{
    handleSubmit(e) {
        event.preventDefault();
        alert("Form submitted");
    }

   render(){
      return(
        <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
                {this.props.data.parameters.map(element => (
                    <label>
                        {element.prettyName}
                        {element.type == "string" || element.type == "int" ?
                            <input placeholder={element.placeholder} type="text" required={element.required} /> : null
                        }
                    </label>
                ))}
                <input type="submit" value="Submit" />
            </form>
            <div className="key">
                <h4>Key:</h4>
                <input type="text" placeholder="Required" required />
                <input type="text" placeholder="Optional" />
            </div>
        </div>
      );
   }
}
export default ApiForm;