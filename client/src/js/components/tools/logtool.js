import React, { Component } from 'react';
import ReactDOM from "react-dom";

class LogTool extends Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            current: "default",
            logs: {}
        }
    }

    componentDidMount() {
        this.getLogs();
    }

    getLogs() {
        fetch("/get-logs")
         .then(res => res.json())
         .then(
            (result) => {
                console.log(result.logs);
                this.setState({logs: result.logs});
            },
            (error) => {
               console.log("A server error occurred when attempting to retrieve the Request Logs.");
            }
         )
    }

    toggleLogModal(bool) {
        this.setState({open: bool});
    }

    renderLogModal() {
        var jsx;
        if (this.state.current == "default") {
            jsx = (
                <div className="overlay">
                    <div className="container log modal">
                        <h1>Request Logs</h1>
                        {this.state.logs ?
                            <table>
                                <thead>
                                    <tr><th><span>Admin</span><input type="text" placeholder="filter"></input></th><th><span>User</span><input type="text" placeholder="filter"></input></th><th><span>Request</span><input type="text" placeholder="filter"></input></th><th><span>Sent</span></th><th><span>Response</span></th><th><span>Date</span><input type="text" placeholder="filter"></input></th><th><span>Time</span></th></tr>
                                </thead>
                                <tbody>
                                    {this.state.logs.map((log, index) => (
                                        <tr><td>{log.user}</td><td>#CoolGuy#1234</td><td>Ban</td><td><button>Sent</button></td><td><button>Response</button></td><td>12/2/19</td><td>10:54am</td></tr>
                                    ))}
                                    <tr><td>dakota@enmasse.com</td><td>#CoolGuy#1234</td><td>Ban</td><td><button>Sent</button></td><td><button>Response</button></td><td>12/2/19</td><td>10:54am</td></tr>
                                    <tr><td>dakota@enmasse.com</td><td>#CoolGuy#1234</td><td>Ban</td><td><button>Sent</button></td><td><button>Response</button></td><td>12/2/19</td><td>10:54am</td></tr>
                                    <tr><td>dakota@enmasse.com</td><td>#CoolGuy#1234</td><td>Ban</td><td><button>Sent</button></td><td><button>Response</button></td><td>12/2/19</td><td>10:54am</td></tr>
                                    <tr><td>dakota@enmasse.com</td><td>#CoolGuy#1234</td><td>Ban</td><td><button>Sent</button></td><td><button>Response</button></td><td>12/2/19</td><td>10:54am</td></tr>
                                </tbody>
                            </table>
                            : <h1 style="margin-top: 170px;">No Request Log Data</h1>
                        }
                        <button className="closeToolModalBtn" onClick={() => this.toggleLogModal(false)}>Close</button>
                    </div>
                </div>
            )
        }
        return ReactDOM.createPortal(jsx, document.querySelector("#logModal"));
    }

    render() {
        return(
            <div>
                {this.state.open == false ?
                    <span className="tool log" onClick={() => this.toggleLogModal(true)}></span> :
                    this.renderLogModal()
                }
            </div>
        );
    }
}
export default LogTool;