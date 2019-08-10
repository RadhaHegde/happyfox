import React from 'react';
// const axios = require("axios");
import axios from 'axios'


import {connect} from 'react-redux';
import { getAllLists } from './actions/ListActions';
import Lists from './TrelloLists/Lists';

class Trello extends React.Component{


  constructor(props){
    super(props);
    this.state={
      lists:[],
      cards:[],
      inputShow:false,
      listName:""
    }
    // this.getAllLists=this.getAllLists.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }


componentWillMount(){
  this.props.getAllLists()
  // axios.get("https://api.trello.com/1/boards/5d3f23cea02d998eddee61cf/lists")
  // .then(response=>{
  //   this.setState({lists:response.data})
  // }
  // )

  // this.getAllLists();
}

handleClick(e){
  e.preventDefault();
this.setState({inputShow:!this.state.inputShow})
}

addNewList(name){
  // console.log("clicked!")
  axios.post("https://api.trello.com/1/boards/5d3f23cea02d998eddee61cf/lists?name=name")
  .then(response=>{
    this.setState({
      lists:response.data
    })
  })
}

// getAllLists(){
// axios.get("https://api.trello.com/1/boards/5d3f23cea02d998eddee61cf/?cards=all")
// .then(response=>{
//   this.setState({
//     cards:response.data
//   })
// })
// }

handleChange(e){
  e.preventDefault();
  this.setState({listName:e.target.value})
}


  render(){
    if(this.state.lists.length===0){
      return null;
    }
    else{
    return (
      // <h1>hi</h1>
      <div className="divBody">
        {this.state.lists.map(el=>{
          return <Lists key={el.id} title={el.name}  listID={el.id} cards={this.state.cards}/>
        })}

      <button type="submit" onClick={this.handleClick}>Add new List</button>
      {this.state.inputShow===true?
      <fieldset style={{width:"fit-content"}}>
        <input type="text" placeholder="Enter new list here" value={this.state.ListName} onChange={this.handleChange}/>
        <br/>
        <button type="submit" onClick={this.state.listName?this.addNewList(this.state.listName):null} className="newList">Add new List</button>
        
      </fieldset>
      :null}
        </div>
    )
    }
  }
}

 const mapStateToProps=(state)=>{
  return{
    lists:state.lists
  }
}
const mapDispatchToProps=dispatch=>({
  getAllLists:()=>dispatch(getAllLists())
})
export default connect(mapStateToProps,mapDispatchToProps)(Trello) 
