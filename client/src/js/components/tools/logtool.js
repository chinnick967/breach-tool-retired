import React, { Component } from 'react';
import ReactDOM from "react-dom";

class LogTool extends Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            current: "default",
            uneditedLogs: {},
            logs: {},
            dataModal: false,
            data: {},
            dataModalTitle: "",
            filters: {
                "Admin": "",
                "Request": "",
                "Date": ""
            }
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
                result.logs = result.logs.reverse();
                this.setState({logs: result.logs, uneditedLogs: result.logs});
            },
            (error) => {
               console.log("A server error occurred when attempting to retrieve the Request Logs.");
            }
         )
    }

    filterLogs() {
        var filteredLogs = this.state.uneditedLogs;
        var filters = this.state.filters;
        for (var key in filters) {
            switch(key) {
                case "Admin":
                    console.log(filters[key]);
                    filteredLogs = filteredLogs.filter(log => log.user.includes(filters[key]));
                    break;
                default:
                    break;
            }
        }
        this.setState({logs: filteredLogs});
    }

    handleFilterFieldChange(key, e) {
        this.changeFilter(key, e.target.value);
    }

    changeFilter(key, value) {
        this.setState({filters:{[key]: value}}, () => {
            this.filterLogs();
        });
    }

    toggleLogModal(bool) {
        this.getLogs();
        this.setState({open: bool});
    }

    toggleDataModal(bool, d, title) {
        d = d || {};
        title = title || "";
        this.setState({dataModal: bool, data: d, dataModalTitle: title});
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
                                    <tr><th><span>Admin</span><input onChange={(e) => this.handleFilterFieldChange("Admin", e)} type="text" placeholder="filter"></input></th><th><span>Request</span><input type="text" placeholder="filter"></input></th><th><span>Sent</span></th><th><span>Response</span></th><th><span>Date</span><input type="text" placeholder="filter"></input></th><th><span>Time</span></th><th><span>Status</span></th></tr>
                                </thead>
                                <tbody>
                                    {this.state.logs.map((log, index) => (
                                        <tr><td>{log.user}</td><td>{log.request.name}</td><td><button onClick={() => this.toggleDataModal(true, log.sentData, "Sent Data")}>Sent</button></td><td><button onClick={() => this.toggleDataModal(true, log.receivedData, "Received Data")}>Response</button></td><td>{new Date(log.timeStamp).toLocaleDateString()}</td><td>{new Date(log.timeStamp).toLocaleTimeString()}</td><td><strong>{log.receivedData["Status Code"]}</strong></td></tr>
                                    ))}
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

    renderDataModal() {
        var jsx;
        jsx = (
            <div className="overlay">
                <div className="container log modal data">
                    <button className="backBtn" onClick={() => this.toggleDataModal(false)}><img src="/assets/back.png" /></button>
                    <h1>{this.state.dataModalTitle}</h1>
                    <div><pre>{JSON.stringify(this.state.data, null, 2) }</pre></div>
                </div>
            </div>
        );
        return ReactDOM.createPortal(jsx, document.querySelector("#logModal"));
    }

    render() {
        return(
            <div>
                {this.state.open == false ?
                    <span className="tool log" onClick={() => this.toggleLogModal(true)}></span> :
                        this.state.dataModal == false ?
                            this.renderLogModal() :
                            this.renderDataModal()
                }
            </div>
        );
    }
}
export default LogTool;