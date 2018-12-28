import React from 'react';
import './App.css';

class App extends React.Component{
  fName = null;
  lName = null;
  age = null;


  onKeyUp(arg,e){
      if(e.keyCode===13){
        switch(arg){
          case 'fName':
          this.lName.focus();
          break;

          case 'lName':
          this.age.focus();
          break;

          case 'age':
          this.submit.focus();
          break;

          default:
          this.fName.focus();
      }
    }
  }

  submitButton(){
    var Name = this.fName.value +" "+ this.lName.value;
    var age = this.age.value;

    alert("Name " + Name + "\nAge " + age);

  }

  render() {
    return (
      <div className="App">
            <div className="div1">
            <header>
              <span > version <span id="s1">1.0</span></span>
              <br/>
              <span id = "h11">React App</span>        
            </header>
            </div>
        <br/><br/><br/>
        <hr/>
          <div>
          <span>First Name</span>
          <input  
          ref={(i)=>{this.fName=i}}
          onKeyUp={this.onKeyUp.bind(this,'fName')}
          type="text"
          />
          </div>

          <div>
          <span> Last Name</span>
          <input
          ref={i => this.lName = i}
          onKeyUp={this.onKeyUp.bind(this,'lName')}
           type="text"
          />
          </div>

          <div>
          <span>Age</span>
          <input 
          ref={(i)=>{this.age=i}}
          onKeyUp={this.onKeyUp.bind(this,'age')}
          type="text"
          />
          </div>

          <div>
          <input type="button" value="Submit"
          ref={i => this.submit = i}
          onClick = {this.submitButton.bind(this)}   
          />
          
          </div>
        </div>
    );
  }
}

export default  App;
