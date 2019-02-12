import React, { Component } from 'react';

import List from './components/list.js';
import Tools from './components/tools.js';
import Signin from './components/signin.js';

class App extends Component{
   constructor(props) {
      super(props);
      this.checkSession = this.checkSession.bind(this);
      this.state = {
         isLoaded: false,
         error: false,
         lists: {},
         user: false,
         sessionChecked: false
      }
   }

   componentDidMount() {
      this.checkSession()
      fetch("/lists")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({
                  isLoaded: true,
                  lists: result
               });
            },
            (error) => {
               this.setState({
                  isLoaded: true,
                  error: true
               });
            }
         )
   }

   checkSession() {
      fetch("/check-session")
         .then(res => res.json())
         .then(
            (result) => {
               result.error ? this.setState({sessionChecked: true, user: false}) : this.setState({sessionChecked: true, user: result})
            },
            (error) => {
               console.log("Session error");
            }
         )
   }
   
   render(){
      var {error, isLoaded, lists, user, sessionChecked} = this.state;
      if (user) {
         if (error) {
            return <div>Error: {error.message}</div>
         } else if (!isLoaded) {
            return <div>Loading...</div>
         } else {
            return(
               <div>
                  <div className="header">
                     <h1>Breach Admin API Tool</h1>
                  </div>
                  <main>
                     {Object.keys(lists).map(key => (
                        <List user={this.state.user} key={key} data={lists[key]}></List>
                     ))}
                  </main>
                  <Tools user={user} />
                  <div id="toolModal"></div>
                  <div id="logModal"></div>
               </div>
            );
         }
      } else if (sessionChecked) {
         return <Signin login={this.checkSession} />
      } else {
         return null
      }
   }
}
export default App;