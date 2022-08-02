import React from "react";
import ReactDOM from "react-dom/client";
// import Admindash from "./Component/Admindash";
// import Teacherdash from "./Component/Teacherdash";
// import Login from "./Component/Login";
import "./index.css";
// import Faculty from "./Component/Faculty";
// import Question_sheet from "./Component/Question_Sheet";


// import Swap from './Swap';
// import Dashbord3 from './Dashbord3'
// import Profile from "./Profile";
// import MainFile from "./MainFile";
// import Faculty from "./Component/Faculty";
import reportWebVitals from "./reportWebVitals";
// import Answer_Sheet from "./Component/Answer_Sheet";
import Display from "./Component/Display";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Faculty/> */}
    {/* {this.state.isloggedin?<Admindash/>:<Login/>} */}
    {/* <MainFile/> */}
    {/* <Question_sheet/> */}
    {/* <Answer_Sheet/> */}
    {/* <Profile/>
    <Dashbord3/>
    <Swap/>
    <Reverse/>
    <Prime/>
    <Header/>
    <Question/>
    <Answer/>
    <Abc/>
    <Evaluation />
    <Dashbord/>
    <Admin/>
    <Teacher/>
    <Login/>
    <Registration2/> 
    <Faculty/>
    <Upload/>
  <Result/>  */}
    {/* <faculty/> */}
  <Display/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
