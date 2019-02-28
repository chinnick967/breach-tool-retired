import React, { Component } from 'react';
import ReactDOM from "react-dom";
import LogTool from "./logtool.js";

class AccountTool extends Component{
    constructor(props) {
        super(props);
        this.toggleAccountModal = this.toggleAccountModal.bind(this);
        this.renderAccountModal = this.renderAccountModal.bind(this);
        this.fieldChange = this.fieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.state = {
            open: false,
            current: "default",
            users: [],
            selectedUser: null,
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

    changeModalState(state, optionalStateParams) {
        optionalStateParams = optionalStateParams || {};
        optionalStateParams.current = state;
        this.setState(optionalStateParams);
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
                this.getUsers();
                this.changeModalState("default");
                alert(result.message);
            },
            (error) => {
                alert(error);
            }
        )
    }

    deleteAccount() {
        var user = this.state.selectedUser;
        var conf = confirm("Are you sure you want to delete the account belonging to " + user.email + "?");
        if (conf) {
            fetch('/delete-account', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({user: user.email}),
            })
            .then(res => res.json())
            .then(
            (result) => {
                this.getUsers();
                this.changeModalState("default");
                alert(result.message);
            },
            (error) => {
                console.log(error);
                alert("An error occurred on the server.");
            })
        }
    }

    changePassword() {
        var pass = prompt("Please enter a new password for the user.");
        var user = this.state.selectedUser;
        if (pass) {
            fetch('/change-password', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({user: user.email, password: pass}),
            })
            .then(res => res.json())
            .then(
            (result) => {
                alert(result.message);
            },
            (error) => {
                console.log(error);
                alert("An error occurred on the server.");
            })
        }
    }

    changePrivilege() {

    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        fetch("/get-users")
         .then(res => res.json())
         .then(
            (result) => {
                this.setState({users: result.users});
            },
            (error) => {
               console.log("Fetch users error");
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
                                <tr><th>Email</th><th>Actions</th></tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(user => (
                                    <tr><td>{user.email}</td><td><button onClick={() => this.changeModalState("actions", {selectedUser: user})}>Actions</button></td></tr>
                                ))}
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
                            <h2>Privileges</h2>
                            <div className="switchField"><span>Find Game Data:</span><div className="switch"><input name="find" type="checkbox" onChange={this.fieldChange} /><span className="slider round"></span></div></div>
                            <div className="switchField"><span>Edit Game Data:</span><div className="switch"><input name="edit" type="checkbox" onChange={this.fieldChange} /><span className="slider round"></span></div></div>
                            <div className="switchField"><span>Tool Administrator:</span><div className="switch"><input name="admin" type="checkbox" onChange={this.fieldChange} /><span className="slider round"></span></div></div>
                            <button type="submit">Create</button>
                        </form>
                        <button className="backBtn" onClick={() => this.changeModalState("default")}><img src="/assets/back.png" /></button>
                        <button className="closeToolModalBtn" onClick={() => this.toggleAccountModal(false)}>Close</button>
                    </div>
                </div>
            );
        } else if (this.state.current == "actions") {
            jsx = (
                <div className="overlay">
                    <div className="container account modal actions">
                        <h1>{this.state.selectedUser.email}</h1>
                        <form>
                            <div className="switchField"><span>Find Game Data:</span><div className="switch"><input name="find" defaultChecked={this.state.selectedUser.find} type="checkbox" onChange={this.changePrivilege} /><span className="slider round"></span></div></div>
                            <div className="switchField"><span>Edit Game Data:</span><div className="switch"><input name="edit" defaultChecked={this.state.selectedUser.edit} type="checkbox" onChange={this.changePrivilege} /><span className="slider round"></span></div></div>
                            <div className="switchField"><span>Tool Administrator:</span><div className="switch"><input name="admin" defaultChecked={this.state.selectedUser.admin} type="checkbox" onChange={this.changePrivilege} /><span className="slider round"></span></div></div>
                        </form>
                        <button className="optionBtn">View Activity</button>
                        <button className="optionBtn" onClick={() => this.changePassword()}>Change Password</button>
                        <button className="optionBtn" onClick={() => this.deleteAccount()}>Delete User</button>
                        <button className="backBtn" onClick={() => this.changeModalState("default")}><img src="/assets/back.png" /></button>
                        <button className="closeToolModalBtn" onClick={() => this.toggleAccountModal(false)}>Close</button>
                    </div>
                </div>
            );
        } else if (this.state.current == "logs") {
            jsx = (
                <LogTool></LogTool>
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