import React,{memo} from "react";
import {useSelector,useDispatch,connect} from 'react-redux'
import { buyCake } from "./ReduxStore/iceCream/action";
function TestRedux(props) {
  //used react memo here to let child component not to render when parent state changes
  const numberOfcakes=useSelector(state=>state.numberOfCakes)
  const dispatch=useDispatch()
    return (
      <div className="App">
        cakes are {
            numberOfcakes
        }
        <button onClick={()=>dispatch(buyCake())

        }>chnage state from childtwo</button>
        {console.log('child 2')}
       
      </div>
    );
  }
  const mapStateToProps=state=>{
    return {
        numberOfCakes:state.numberOfCakes
    }
  }
  const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TestRedux)