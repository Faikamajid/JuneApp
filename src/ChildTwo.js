import React,{memo} from "react";
function ChildTwo(props) {
  //used react memo here to let child component not to render when parent state changes
  
    return (
      <div className="App">
        second child
        <button onClick={()=>props.changeName('from child')}>chnage state from childtwo</button>
        {console.log('child 2')}
       
      </div>
    );
  }
  
  export default memo(ChildTwo);