import "./App.css";
// import { Provider } from 'react-redux';
import { useState, useEffect, useMemo } from "react";
// import ChildComp from './ChildComp';
// import ChildTwo from './ChildTwo';
// import TestRedux from './TestRedux';
// import store from './ReduxStore/store';
import Counter from "./Counter";
import MyProjects from "./MyProjects";
import ShowData from "./ShowData";
import CustomHeaderComp from "./CustomHeaderComp";
import WriteComp from "../src/FireBaseComps/WriteComp";
import ReadFromFireBaseDb from "./FireBaseComps/ReadFromFireBaseDb";
import UpdateFromDb from "./FireBaseComps/UpdateFromDb";

function App() {
  const [name, setName] = useState("first name");
  const [secondname, setSecondName] = useState("first name");
  const [tabValue, setTabValue] = useState("Charts");
  const changeName = (name) => {
    setName(name);
  };
  const changeSecondName = () => {
    console.log("second function chnage");
    setSecondName("secoond naem");
  };
  const changeTabOption = (value) => {
    setTabValue(value);
    console.log("changing val", value);
  };
  return (
    // <Provider store={store}>
    <div className="App">
      {/* part A */}
      {/* {name}
     <button onClick={()=>changeName('name from parent')}>chnage state from parent</button> */}
      {/* //we have wrappend this child in use memo , if any state in parent chabge it will not rerender thi schild, whose prop is not chnaging */}
      {/* <ChildComp/>
      <ChildTwo changeName={changeName}/> */}
      {/* <TestRedux/> */}

      {/* using top header component  */}
      <CustomHeaderComp changeTabOption={changeTabOption} />
      {/* <WriteComp/> */}
      {/* <UpdateFromDb /> */}
      {tabValue === "Charts" ? (
        <MyProjects />
      ) : tabValue === "Counter" ? (
        <Counter />
      ) : tabValue === "Cards" ? (
        <div>
          <ShowData />
        </div>
      ) : tabValue === "Users" ? (
        <ReadFromFireBaseDb />
      ) : tabValue === "AddUser" ? (
        <WriteComp />
      ) : tabValue === "UpdateUsersDetail" ?
      <UpdateFromDb/>
      :
      (
        <></>
      )}
    </div>
    // </Provider>
  );
}

export default App;
