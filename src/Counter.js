import React, { useState } from "react";
//here we will create a text that shows counter value and plus minus boxes to increase and decrease the count
//a functional component
import { Box } from "@mui/material";

function Counter(props) {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div style={{position: 'relative',
      float: 'left',
      height: '500px',
      display: 'flex',
  
      justifyContent: 'center',
      alignItems: 'center',
      columnGap:'52px',
      width:'100%'}}>
  
   
      <div>
      <i class="fa fa-window-minimize" onClick={() => decreaseCount() }style={{fontSize:"20px",cursor:'pointer',userSelect:'none',color:'purple'}}></i>
        </div>
      <div style={{width:'28px',height:'28px',backgroundColor:"#c000ff63",color:'white',
    padding: '39px',
    borderRadius: '12px',
    fontWeight: 'bold',
    textAlign:'center',
    lineHeight:'20px',
    fontSize:'x-large',
    fontWeight:500,

      }}>
    {count}
     </div>
      <div>
      <i onClick={() => IncreaseCount()} class="fa fa-plus" style={{fontSize:"20px",cursor:'pointer',userSelect:'none',color:'purple'}}></i>
      </div>
    </div>
  );
}
export default Counter;
