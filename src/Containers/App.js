import React from 'react';
//import all we need cardList and robots array:
import Cardlist from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends React.Component{
    //add(define) state by a class constructor:
    constructor(){
        super();
        //this object have 2 properties robots-array and searchfield(initialize part)
        // (this.setState=App.setState are the same thing)
       this.state={
          robots: [],
          //declared empty
          searchField: ''
        }
        
    }

   //this function run when onChange event from input is triggered(in searchBox component)
   onSearchChange=(event)=>{
       //modify the state with everything we type in searchbox:(this.setState=App.setState are the same thing)
       this.setState({searchField:event.target.value}) 

   }
 
   //this method is part from React(has own standard name) this is invoked after a component si mounted
   componentDidMount(){
    //fetch function is used to grab data by sending a request to the server   
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>{
      return response.json();
     }).then(users=>{this.setState({robots:users})});//setState will modify/update current state with obtained data
 
   }

    render(){
       //destructuring the object: 
       const{robots,searchField} = this.state;
       
       //filter the search (this.state.robots->access the robots array) we manage state here:
       const filterRobots=robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
       });
 
       //use robots instead this.state.robots
       if(robots.length===0){
           return <h1 className="tc">Loading...</h1>
       }
       else{
        return(
            <div className='tc'>
               <h1 className=" ">Robofriends</h1>   
               <SearchBox searchChange={this.onSearchChange}/>
               {/* Cards list state form robots is pass down as props (cardlist robots will be filtered cardlist robots) */}
               {/* create Scroll component */}
               <Scroll>
                  {/*Children*/}
                  <Cardlist robots={filterRobots}/>
               </Scroll>
            </div>
             
         );
       }
    }
}


export default App;