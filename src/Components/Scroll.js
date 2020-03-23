import React from 'react';

const Scroll=(props)=>{
   
    return(  
        //add some properties:
        //overflow->css property that makes a scroll bar
       <div style={{overflowY:'scroll', border:'1px solid black',height:'900px'}}>
           {props.children}
       </div>
    );
}

export default Scroll;