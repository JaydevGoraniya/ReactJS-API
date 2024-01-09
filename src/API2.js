import { useEffect, useState } from "react"

function API2(){
    const[data,setdata]=useState([])
    const[load,setLoad]=useState(false)
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((res)=>{
            setdata(res);
            setLoad(true);
        }
        )

    },[])

        if(!load)
        {
            return<h1>Loading...</h1>
        }
    
        
    return(
    <>  

        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
        {data.map( (mydata) =>{
            return(<tr>
           <td> {mydata.id}</td>
           <td> {mydata.title}</td>
           <td> {mydata.price}</td>
           <td><img src={mydata.image} width={100} /></td>
           
          </tr>
            )
        })}
        </table>
    </>
    )
}
export default API2