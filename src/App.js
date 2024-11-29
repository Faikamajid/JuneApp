import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { useState,useEffect,useMemo} from 'react';
import ChildComp from './ChildComp';
import ChildTwo from './ChildTwo';
import TestRedux from './TestRedux';
import store from './ReduxStore/store';
import Counter from './Counter';
import FetchData from './FetchDataComp';
import MyProjects from './MyProjects';
import { MyResponsiveStream } from './Charts/streamChart';
import { streamData } from './Data/StreamChartData';
import CardComp from './MaterialUi/CardComp'
import ShowData from './ShowData';
import CustomHeaderComp from './CustomHeaderComp';
import WriteComp from './WriteComp';

function App() {
  const [name,setName]=useState('first name')
  const [secondname,setSecondName]=useState('first name')
  const [tabValue,setTabValue]=useState('Charts')
  const changeName=(name)=>{
    setName(name)
  }
  const changeSecondName=()=>{
    console.log('second function chnage')
    setSecondName('secoond naem')
  }
  const changeTabOption=(value)=>{
 setTabValue(value)
 console.log('changing val',value)
  }
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
   <CustomHeaderComp changeTabOption={changeTabOption}/>
    <WriteComp/>
   {tabValue==='Charts'?<MyProjects/>:tabValue==='Counter'?<Counter/>:tabValue==='Cards'?<div><ShowData /></div>:<></>}


      {/* part B Counter  */}
     {/* <Counter /> */}


   

     {/* showing component to fetch data */}
     {/* <FetchData/> */}
    
     

     {/* import new comp projects */}
     {/* <MyProjects/> */}
     

     {/* using material ui card */}
     {/* <ShowData /> */}
  

    </div>
    // </Provider>
    );
}

export default App;
