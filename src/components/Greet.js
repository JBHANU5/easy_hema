import React from 'react';
function Greet({ name, age})
{
    return(
      <div> <h1>hello { name} { age} </h1>
        
        </div> 
    ) 
}
 //export const Greet=()=><h1>hello</h1>
 export default Greet//this component is default so if the import name in app.js is not greet then also it will work