import axios from "axios";
import React from "react";
import { json } from "react-router-dom";
class API2A extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mydata:[],
            isLoaded:false
        }
       }
       componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            console.log(res.data)
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
                {v.title}
                {v.price}
                <img src={v.image} width={100} /><br/>
                </>)
            })}
        
            </>
        )
    }
}
export default API2A;