import React from 'react';

//pure component->prop(searchChange) destructuring from app->parameter
const SearchBox=({searchField, searchChange})=>{
    return(
     <div className="tc ">

       <input 
         className='pa3 ba b--green bg-lightest-white'
         type='search'
         placeholder='search robots'
         onChange={searchChange}
       />
       {/*every time the onChange event is triggered call the searchChange function that is geven as a parameter*/}

     </div>

    );
}

export default SearchBox;