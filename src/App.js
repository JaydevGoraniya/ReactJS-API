import React from "react";
import { Routes,Route } from "react-router-dom";
import API1 from "./API1";
import Menu from "./Menu";
import Error from "./Error";
import API2 from "./API2";
import API3 from "./API3";
import API1A from "./API1A";
import API2A from "./API2A";
import API3A from "./API3A";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<API1/>}/>
      <Route path="/API1" element={<API1/>}/>
      <Route path="/API2" element={<API2/>}/>
      <Route path="/API3" element={<API3/>}/>
      <Route path="/API1A" element={<API1A/>}/>
      <Route path="/API2A" element={<API2A/>}/>
      <Route path="/API3A" element={<API3A/>}/>
      <Route path="/*" element={<Error/>}/>

    </Routes>

    </>
    )
  }
}
export default App