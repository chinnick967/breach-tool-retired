import React, { Component } from 'react';

import List from './components/list.js';
import Tools from './components/tools.js';

class App extends Component{
   constructor(props) {
      super(props);
      this.state = {
         isLoaded: false,
         error: false,
         lists: {}
      }
   }

   componentDidMount() {
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
   
   render(){
      const {error, isLoaded, lists} = this.state;
      if (error) {
         return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
         return <div>Loading...</div>
      } else {
         return(
            <div>
               <div className="header">
                  <h1>Breach Admin API Tool</h1>
                  <Tools />
               </div>
               <main>
                  {Object.keys(lists).map(key => (
                     <List key={key} data={lists[key]}></List>
                  ))}
               </main>
            </div>
         );
      }
   }
}
export default App;