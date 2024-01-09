import axios from "axios";
import React from "react";
import { json } from "react-router-dom";
class API1A extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mydata:[],
            isLoaded:false
        }
       }
       componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res)
            this.setState({
                mydata:res.data,
                isLoaded:true
            })
        })
       }
    render(){
        var{isLoaded,mydata}=this.state
        if(!isLoaded){
            return<h1>Loading...</h1>
        }
        return(
            <>
            {mydata.map((v,i)=>{
                return(<>
                {v.id}
                {v.name}
                {v.phone}
                {v.address.city}<br/>
                </>)
            })}
        
            </>
        )
    }
}
export default API1A;