class Form extends React.Component{  
  
  constructor(props){
    super(props);
    this.state = {
      name : "",
      add : ""
    }
  }
  
  handleNameChange(e) {
   this.setState({name: e.target.value});
  };

handleAddChange(e) {
   this.setState({add: e.target.value});
};
  handleData(){ 
  if(this.state.name == "" || this.state.add == ""){
    alert("Please fill Name and Address")
  }
    
    else{
    document.getElementById("a").innerHTML = "Name: " + this.state.name;
    document.getElementById("b").innerHTML = "Address: " + this.state.add;
       }
  }
  
  Clear(){
    document.getElementById("a").innerHTML = "";    document.getElementById("b").innerHTML = "";
    this.setState({name:"",add:""})
  }
  render(){ 
    return(
  <div>
      <h1 style={{marginLeft:"180px"}}>Form</h1>
      <form target="_blank">
        <table style={{marginLeft:"100px"}}>
          <tr>
            <td>Name</td>
            <td><input type="text" onChange={this.handleNameChange.bind(this)}/></td>
          </tr>
          <tr>
            <td>Address &nbsp;</td>
            <td><input type="text"  onChange={this.handleAddChange.bind(this)}/></td>
          </tr>
        </table>
        <br />
        <button type="button" onClick={this.handleData.bind(this)} style={{fontSize:"18px",fontWeight:"bold",marginLeft:"100px"}} >Submit</button>
        <input type="Reset" value="Clear" onClick = {this.Clear.bind(this)}style={{fontSize:"18px",fontWeight:"bold",marginLeft:"100px"}} />
      </form>
        <p id="a"></p>
       <p id="b"></p>
    </div>
  
    );
  }
}          

ReactDOM.render(
<Form />, document.getElementById("root"));


