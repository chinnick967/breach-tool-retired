import React, { Component } from 'react';
import ArrayInput from './array-input.js';

class ApiForm extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);

        this.state = {
            form: {}
        }
    }

    handleSubmit(e) {
        event.preventDefault();
        var formData = this.state.form;
        this.props.showResponsePanel(true);
        fetch('/test', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
         .then(
            (result) => {
                this.props.showResponseData(result);
            },
            (error) => {
                this.props.showResponseData(error);
            }
         )
        this.props.showResponsePanel(true);
    }

    handleFieldChange(e) {
        var field = e.target;
        var form = this.state.form;
        if (field.type == "checkbox") { // handle boolean switches
            if (field.value == "on") {
                form[field.name] = true;
            } else {
                form[field.name] = false;
            }
        } else if (field.getAttribute('array')) { // handle arrays
            var parent = field.getAttribute('parent');
            var key = field.getAttribute('arrayid');
            if (!form[parent]) {
                console.log("test");
                console.log(parent);
                form[parent] = [];
            }
            form[parent][key] = field.value;
        } else {
            console.log("not array");
            form[field.name] = field.value;
        }
        this.setState(form);
        console.log(form);
    }

   render(){
      return(
        <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
                {this.props.data.parameters.map(element => (
                    <label key={element.prettyName}>
                        <span required={element.required}>{element.prettyName}</span>
                        {element.type == "string" || element.type == "int" ?
                            <input name={element.name} placeholder={element.placeholder} type="text" required={element.required} onChange={this.handleFieldChange} /> : null
                        }
                        {element.type == "blob" ?
                            <textarea name={element.name} placeholder={element.placeholder} type="text" required={element.required} onChange={this.handleFieldChange} /> : null
                        }
                        {element.type == "bool" ?
                            <div><div className="switch"><input name={element.name} onChange={this.handleFieldChange} type="checkbox" /><span className="slider round"></span></div></div> : null
                        }
                        {element.type == "array" ?
                            <ArrayInput parent={element.name} name={element.name} array={"true"} placeholder={element.placeholder} required={element.required} handlefieldchange={this.handleFieldChange} /> : null
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