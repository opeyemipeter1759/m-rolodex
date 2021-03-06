import React, {Component} from 'react'
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-item/search.component';


class App extends Component {
 constructor (){
   super();
   this.state ={
     monsters:[],
     searchItem : ""
   }
 }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}))
}
handleChange = (e)=>{
    this.setState({searchItem:e.target.value})
 }
  render() {
    const {monsters, searchItem} = this.state
    const filteredItem = monsters.filter(monster=> monster.name.toLowerCase().includes(searchItem.toLowerCase()))
    return (
        <div className="App"> 
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder="search monsters"  handleChange ={this.handleChange} />
       <CardList monsters = {filteredItem} />
     
    </div>
    
    )
  }
}

export default App;
