import React,{memo} from "react";
function ChildComp(props) {
  //used react memo here to let child component not to render when parent state changes
  
    return (
      <div className="App">
        level one
        {console.log('child one')}
       
      </div>
    );
  }
  
  export default memo(ChildComp);