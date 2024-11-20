
//action creator we have create , that is a function that returns an action
import { BUY_CAKE } from "./Type"
export function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First  redux action'
    }
}
//action is an object with type property
//action creator is a function that return an action
