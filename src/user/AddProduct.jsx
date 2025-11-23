import { useState } from "react"
import { addproducts } from "../api"

export default function AddProduct(){
    var [productName,setProductName]=useState("")
var [productDescription,setProductDescriptions]=useState("")
var [productPrice,setProductPrice]=useState("")
var [productImage,setProductImage]=useState("")
var [productCateogry,setProductCateogry]=useState("")
var postProducts=async(e)=>{
    e.preventDefault();
    var response= await addproducts({productName,productDescription,productImage,productPrice,productCateogry})
    console
    alert(response.data.message)
}
return(
    <>
    <div className="row d-flex justify-content-center ">
        <div className="col-md-6 shadow-lg py-5">
            <h2>Add Products</h2>
            <hr />
            <form action="" onSubmit={postProducts}>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Name:</label>
                    <input type="text" onChange={(e)=>setProductName(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Description:</label>
                    <input type="text" onChange={(e)=>setProductDescriptions(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Price:</label>
                    <input type="text" onChange={(e)=>setProductPrice(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Image URL:</label>
                    <input type="text" onChange={(e)=>setProductImage(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Cateogry:</label>
                    <input type="text" onChange={(e)=>setProductCateogry(e.target.value)} className="form-control" />
                </div>
                <div className="form-group py-3">
                    <button type="submit" className="btn btn-lg bg-success text-white">Add Product</button>
                </div>
            </form>
        </div>
    </div>
    </>
)
}   


