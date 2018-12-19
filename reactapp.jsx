class Form extends React.Component{
  render(){
    return(
  <div>
      <h1 style={{marginLeft:"180px"}}>Form</h1>
      <form target="_blank">
        <table style={{marginLeft:"100px"}}>
          <tr>
            <td>Name</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Address &nbsp;</td>
            <td><input type="text" /></td>
          </tr>
        </table>
        <br />
        <input type="button" value="Submit" style={{fontSize:"18px",fontWeight:"bold",marginLeft:"100px"}} />
        <input type="Reset" value="Clear" style={{fontSize:"18px",fontWeight:"bold",marginLeft:"100px"}} />
      </form>
    </div>
    );
  }
}          

ReactDOM.render(
<Form />, document.getElementById("root")                );
