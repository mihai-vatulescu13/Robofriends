//parent component
import React from 'react';
//we need Card component properties to set here
import Card from '../Components/Card';
                   
        //destructuring(the best way) this argument is an array;
const CardList=({robots})=>{

    //create a new array(cardComponent) by mapping robots array:
    const cardArray=robots.map((user,index)=>{
      //return multiple components:(each child needs a key (for each position))
      return  (
         <Card
            key={index}
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email} 
         />);
    });

    return(
        <div> 
            {cardArray}
        </div>
    );
}

export default CardList;