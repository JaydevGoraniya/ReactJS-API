import React from "react";
import { json } from "react-router-dom";
class API1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mydata:[],
            isLoaded:false
        }
       }
       componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res=>{
            console.table(res)
            this.setState({
                isLoaded:true,
                mydata:res
            })
        })
       }
    render(){
        var{isLoaded}=this.state
        if(!isLoaded){
            return<h1>Loading...</h1>
        }
        return(
            <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
            {this.state.mydata.map((v,i)=>{
                return(<tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.phone}</td>
                <td>{v.address.city}</td><br/>
                </tr>)
            })}
            </table>
            </>
        )
    }
}
export default API1;