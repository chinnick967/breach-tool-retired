import React, { Component } from 'react';

class ArrayInput extends Component{
    constructor(props) {
        super(props);
        this.handleAddArrayInput = this.handleAddArrayInput.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            children: []
        }
    }

    handleAddArrayInput() {
        var arr = this.state.children;
        arr.push("Add");
        this.setState({
            children: this.state.children
        });
        console.log(this.state.children.length);
    }

    handleChange(e) {
        this.props.handlefieldchange(e);
    }

   render() {
      return(
        <div className="arrayWrapper">
            <input key={0} array={"true"} arrayid={0} parent={this.props.name} placeholder={this.props.placeholder} type="text" required={this.props.required} onChange={this.handleChange} />
            {this.state.children.map((element, index) => (
                <input className="arrayInput" array={"true"} key={index + 1} arrayid={index + 1} parent={this.props.name} placeholder={this.props.placeholder} type="text" required={this.props.required} onChange={this.handleChange} />
            ))}
            <button type="button" className="arrayAddBtn" onClick={() => this.handleAddArrayInput()}>+</button>
        </div>
      );
   }
}
export default ArrayInput;