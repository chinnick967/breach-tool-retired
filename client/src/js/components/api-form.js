import React, { Component } from 'react';
import ArrayInput from './array-input.js';

class ApiForm extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);

        this.state = {
            form: {},
            user: this.props.user
        }
    }

    componentDidMount() {
        this.state.form.request = this.props.data;
        Object.keys(this.props.data.parameters).forEach((key) => {
            var parameter = this.props.data.parameters[key];
            if (parameter.type == "hidden") {
                var form = this.state.form;
                form[parameter.name] = parameter.value;
                this.setState({form: form});
            }
        });
        console.log("FORM");
        console.log(this.state.form);
    }

    handleSubmit(e) {
        event.preventDefault();
        var formData = this.state.form;
        formData["CSAgentId"] = this.state.user["email"];
        this.props.showResponsePanel(true);
        fetch('/apiRequest', {
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
            form[field.name] = field.value == "on";
        } else if (field.getAttribute('array')) { // handle arrays
            var parent = field.getAttribute('parent');
            var key = field.getAttribute('arrayid');
            if (!form[parent]) {
                form[parent] = [];
            }
            form[parent][key] = field.value;
        } else {
            form[field.name] = field.value;
        }
        this.setState(form);
    }

   render(){
      return(
        <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
                {this.props.data.parameters.map(element => (
                    <div>
                        {element.type != "hidden" ?
                            <label key={element.prettyName}>
                                <span required={element.required}>{element.prettyName}</span>
                                {element.type == "string" || element.type == "int" ?
                                    <input name={element.name} placeholder={element.placeholder} type="text" required={element.required} onChange={this.handleFieldChange} /> : null
                                }
                                {element.type == "blob" ?
                                    <textarea name={element.name} placeholder={element.placeholder} type="text" required={element.required} onChange={this.handleFieldChange} /> : null
                                }
                                {element.type == "bool" ?
                                    <div><div className="switch"><input name={element.name} onChange={this.handleFieldChange} type="checkbox" defaultChecked="true" /><span className="slider round"></span></div></div> : null
                                }
                                {element.type == "array" ?
                                    <ArrayInput parent={element.name} name={element.name} array={"true"} placeholder={element.placeholder} required={element.required} handlefieldchange={this.handleFieldChange} /> : null
                                }
                                {element.type == "dropdown" ?
                                    <select>
                                    {
                                        element.dropdown.map((option, index) => {
                                            return <option key={option.value} value={option.value}>{option.text}</option>
                                        })
                                    }
                                    </select> : null
                                }
                            </label> : null
                        }
                    </div>
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
