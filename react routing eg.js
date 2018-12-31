import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Redirect, Prompt} from 'react-router-dom';


let Home = () =>
<div> 
  <h1>Home</h1>
</div>

let Form = () => 
  <h1>Form</h1>

  


class App extends Component {

  state = {
    loggedIn : false

  }

  logIn(){
    this.setState(a=>({
     loggedIn : !a.loggedIn})
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Prompt 
          when={!this.state.loggedIn}
          message={(loc)=>{
            return loc.pathname.startsWith('/form') ? "Log In First" : true
          }}
          />
          <NavLink to="/">Home</NavLink><br/>
          <NavLink to="/form" >Form</NavLink>
          <Route exact strict path='/' component={Home}/>
          <Route exact strict path='/form' render={()=>(
            this.state.loggedIn ? (<Form/>) : (<Redirect to="/"/>)
          )}/>
          <input type='button' value={this.state.loggedIn ? "Log Out":"Log In"} onClick={this.logIn.bind(this)}/>
        </div>
      </Router>
    );
  }
}

export default App;
