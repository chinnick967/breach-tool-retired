import React, { Component } from 'react';

class ApiForm extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        event.preventDefault();
        const data = new FormData(e.target);
        console.log(data);
        fetch('/test', {
            method: 'POST',
            body: data,
        })
        .then((response) => response.json())
        .then((response) => {
            console.log("FINISHED");
            console.log(response);
        });
        this.props.showResponsePanel(true);
    }

   render(){
      return(
        <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
                {this.props.data.parameters.map(element => (
                    <label key={element.prettyName}>
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