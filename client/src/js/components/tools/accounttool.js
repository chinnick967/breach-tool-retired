import React, { Component } from 'react';
import ReactDOM from "react-dom";

class AccountTool extends Component{
    constructor(props) {
        super(props);
        this.toggleAccountModal = this.toggleAccountModal.bind(this);
        this.renderAccountModal = this.renderAccountModal.bind(this);
        this.fieldChange = this.fieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            open: false,
            current: "default",
            form: {
                find: false,
                edit: false,
                admin: false
            }
        }
    }

    componentDidMount() {
        console.log("account mounted");
    }

    toggleAccountModal(bool) {
        this.setState({open: bool});
    }

    changeModalState(state) {
        this.setState({current: state});
    }

    fieldChange(e) {
        var field = e.target;
        var form = this.state.form;
        if (field.type == "checkbox") { // handle boolean switches
            if (field.value == "on") {
                form[field.name] = true;
            } else {
                form[field.name] = false;
            }
        } else {
            form[field.name] = field.value;
        }
        this.setState(form);
    }

    handleSubmit(e) {
        event.preventDefault();
        var formData = this.state.form;
        fetch('/create-account', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.changeModalState("default");
                alert(result.message);
            },
            (error) => {
                alert(error);
            }
        )
    }

    renderAccountModal() {
        var jsx;
        if (this.state.current == "default") {
            jsx = (
                <div className="overlay">
                    <div className="container account modal">
                        <h1>Accounts</h1>
                        <table>
                            <thead>
                                <tr><th>Name</th><th>Activity</th><th>Priveledges</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Rawrcat</td><td><button>Activity</button></td><td><button>Priveledges</button></td></tr>
                                <tr><td>Rawrcat</td><td><button>Activity</button></td><td><button>Priveledges</button></td></tr>
                                <tr><td>Rawrcat</td><td><button>Activity</button></td><td><button>Priveledges</button></td></tr>
                                <tr><td>Rawrcat</td><td><button>Activity</button></td><td><button>Priveledges</button></td></tr>
                                <tr><td>Rawrcat</td><td><button>Activity</button></td><td><button>Priveledges</button></td></tr>
                                <tr><td>Rawrcat</td><td><button>Activity</button></td><td><button>Priveledges</button></td></tr>
                            </tbody>
                        </table>
                        <button className="createAccountBtn" onClick={() => this.changeModalState("create")}>Create</button>
                        <button className="closeToolModalBtn" onClick={() => this.toggleAccountModal(false)}>Close</button>
                    </div>
                </div>
            );
        } else if (this.state.current == "create") {
            jsx = (
                <div className="overlay">
                    <div className="container account modal">
                        <h1>Create Account</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="Email" placeholder="Email" onChange={this.fieldChange} />
                            <input type="password" name="Password" placeholder="Password" onChange={this.fieldChange} />
                            <h2>Priveledges</h2>
                            <div className="switchField"><span>Find Game Data:</span><div className="switch"><input name="find" type="checkbox" onChange={this.fieldChange} /><span className="slider round"></span></div></div>
                            <div className="switchField"><span>Edit Game Data:</span><div className="switch"><input name="edit" type="checkbox" onChange={this.fieldChange} /><span className="slider round"></span></div></div>
                            <div className="switchField"><span>Tool Administrator:</span><div className="switch"><input name="admin" type="checkbox" onChange={this.fieldChange} /><span className="slider round"></span></div></div>
                            <button type="submit">Create</button>
                        </form>
                        <button className="backBtn" onClick={() => this.changeModalState("default")}>Back</button>
                        <button className="closeToolModalBtn" onClick={() => this.toggleAccountModal(false)}>Close</button>
                    </div>
                </div>
            );
        }
        return ReactDOM.createPortal(jsx, document.querySelector("#toolModal"));
    }

   render() {
      return(
        <div>
            {this.state.open == false ?
                <span className="tool account" onClick={() => this.toggleAccountModal(true)}></span> :
                this.renderAccountModal()
            }
        </div>
      );
   }
}
export default AccountTool;