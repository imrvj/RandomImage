import React, { Component } from 'react';




class Middle extends Component {
    state = {  }

    
    fun = () =>
    {
        alert("yo");
    };
  
    render() { 
       
        return (
<div class="middle">



 


<div class="container" >
<label>Email</label>
<input className="form-control" type="text" placeholder="Email" name="email"required></input>

<label>Password<br></br></label>

<input type="text" className="form-control" placeholder="Password"></input>
<input type="submit" className="btn btn-primary" class="button" onClick={this.fun}></input>

    


</div>





</div>


          );
    }
}




export default Middle;
<div class="middle"></div>



