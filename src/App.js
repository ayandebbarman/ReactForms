import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state={
      firstName:"",
      lastName:"",
      isFriendly: false,
      gender:"",
      favcolor:""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name,value,type,checked} = event.target

    type==="checkbox"?  this.setState({[name]:checked}) :this.setState({
      [name]:value
    })
    // console.log(this.state.firstName);
  }

  render(){
    return(
      <form>
        <input type="text" name = "firstName" placeholder="First Name" onChange={this.handleChange}></input>
        <br/>
        <input type="text" name = "lastName" placeholder="Last Name" onChange={this.handleChange}></input>
        <br/>
        <br/>
        <textarea placeholder="Some Text Here"></textarea>
        <br/>
        <input type="checkbox" name = "isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}></input>
        <label>Is Friendly?</label>
        <br/>
        <input type="radio" 
        name = "gender" 
        value="male" 
        checked={this.state.gender === "male"} 
        onChange={this.handleChange}/>Male<label/>
        <br/>
        <input type="radio" 
        name = "gender" 
        value="female"
        checked={this.state.gender === "female"}
        onChange={this.handleChange}/>Female<label/>

        <br/>

        <select
        name="favcolor"
        value={this.state.favcolor}
        onChange={this.handleChange}>
          <option value="blue">blue</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="black">black</option>
        </select>


        <h1>{this.state.firstName} {this.state.lastName}</h1>
       {/* {this.state.isFriendly}? <h2>You are friendly</h2>:<h2>You are not friendly</h2> */}
        <h2>You are {this.state.gender}</h2>

      </form>
    )
  }

}

export default App;
