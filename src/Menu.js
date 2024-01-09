import React from "react";
import { Link } from "react-router-dom";
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){

        return(
            <>
            <h2 style={{textAlign:"center"}} ><Link to="/API1">API1</Link> | <Link to="/API2">API2</Link> | <Link to="/API3">API3</Link> | <Link to="/API1A">API1A</Link> | <Link to="/API2A">API2A</Link> | <Link to="/API3A">API3A</Link></h2>
            <br/>
            </>
        )
    }
}
export default Menu;