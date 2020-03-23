// create our react component:
//import what we need:
import React from 'react';


//create a class/or function(in this case):
//add a parameter to allow use an object properties(props.name,props.email...) to create dynamic component
    //use destructuring to grab object properties(argument variables):
const Card = ({ name,email,id }) => {
    
    //this class contain a render() method that return the component content:
      return(
        //jsx syntax  
        <div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc'>

            {/* use template strings to automatically set robot by id */}
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
            <div>

            {/* props is a javascript object and we need {} to recognize in jsx syntax */}
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
      );  
    
}

export default Card;