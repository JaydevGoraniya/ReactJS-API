import axios from "axios";
import React from "react";
class API3A extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mydata:[],
            isLoaded:false
        }
       }
       componentDidMount(){
        axios.get("https://dummyjson.com/products")
        .then(res=>{
            console.log(res)
            this.setState({
                mydata:res.data.products,
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
                return(<div key={i} >
                {v.id}
                {v.title}
                {v.images.map((v1,j)=>{
                
                   return <img src={v1} key={j}  />
                    
                })}
                <br/>
                </div>)
            })}
        
            </>
        )
    }
}
export default API3A;