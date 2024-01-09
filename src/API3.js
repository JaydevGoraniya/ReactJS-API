import React from "react";

class API3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoad:false
        }
    }
    componentDidMount() {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(res => {
                console.table(res.products)
                this.setState({ 
                    data: res.products,
                    isLoad:true
                 })
            })
    }
    render() {
        let {isLoad,img}=this.state
        if(!isLoad){
            return(<h1>Loading...</h1>)
        }
        return (
            <>
                <h3 class="heading"> Product Grid</h3>
                <div class="container">
                    <div class="row product">
                        {this.state.data.map(productdata => {
                            return (
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="ccc">

                                            <p class="text-center">{productdata.images.map((v)=>{
                                                        return(<img src={v.images} class="imw" width={150} />)
                                            })}</p>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="text-center">{productdata.title}</h5>
                                            <p class="text-center">Price: ${productdata.price}</p>
                                <input type="submit" name="Save" value="Buy" class=" cc1" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>

            </>
        )
    }

}
export default API3;