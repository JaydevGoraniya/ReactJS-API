import { useNavigate } from "react-router-dom";
function Error(){
    let navigate=useNavigate();
    return(
        <>
        <h1>Error</h1>
        <button onClick={()=>navigate("/API1")}>Go Back</button>
        </>
    )
}
export default Error;