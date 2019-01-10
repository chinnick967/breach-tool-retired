import React, { Component } from 'react';

class Signin extends Component{
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
        fetch('/sign-in', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(
            (result) => {
                result.error ? alert(result.message) : this.props.login()
            },
            (error) => {
                console.log(error);
            }
        )
    }

    handleFieldChange(e) {
        var field = e.target;
        var form = this.state.form;

        form[field.name] = field.value;
        this.setState(form);
    }

   render() {
      return(
        <div className="container signin">
            <h1>Breach API Admin Tool</h1>
            <h2>Sign in to your Account</h2>
            <form onSubmit={this.handleSubmit}>
                <input name="email" type="text" placeholder="Email address" onChange={this.handleFieldChange} required></input>
                <input name="password" type="password" placeholder="Password" onChange={this.handleFieldChange} required></input>
                <button type="submit" value="Submit">Sign In</button>
            </form>
        </div>
      );
   }
}
export default Signin;