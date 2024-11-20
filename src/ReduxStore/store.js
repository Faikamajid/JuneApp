import { createStoreHook } from "react-redux";
import cakereducer from "./iceCream/reducer";
const store=createStoreHook(cakereducer)
export default store