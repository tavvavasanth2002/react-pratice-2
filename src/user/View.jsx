import { useEffect, useState } from "react";

export default function View(){
    var [product,setprod]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setprod(data))
    },[])
    return(
        <>
        <div className="container">
            <div className="row">
                {product.map((data)=>(
                    <div className="col-md-4" key={data.id}>
                        <div className="card">
                            <div className="card-img-top">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-lg bg-primary text-white">Buy Now</button>
                                <button className="btn btn-lg bg-warning text-white">Wishlist</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}