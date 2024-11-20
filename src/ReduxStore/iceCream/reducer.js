import { BUY_CAKE } from "./Type"
const initialState={
    numberOfCakes:10
}


const cakereducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,// means return the copy of state then update the number of cake prperty only
            //other properties will remain unchanged
            numberOfCakes:state.numberOfCakes-1
        }
        default: return state 
        //return state as it is
    }
}
export default cakereducer 