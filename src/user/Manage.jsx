import { useEffect, useState } from "react";
import { deleteProduct, getproducts, updateProducts } from "../api";

export default function Manage(){
    var response;
   
    var [products,setProducts]=useState([])
    var [productId,setProductId]=useState("")
    var [productName,setProductName]=useState("")
    var [productDescription,setProductDescriptions]=useState("")
    var [productPrice,setProductPrice]=useState("")
    var [productImage,setProductImage]=useState("")
    var [productCateogry,setProductCateogry]=useState("")
    async function getdata(){
        response=await getproducts()
        setProducts(response.data);
        console.log(products)
    }
      useEffect(()=>{
      getdata();
    },[])
    var updateNow=(obj)=>{
        setProductId(obj._id)
        setProductName(obj.productName)
        setProductDescriptions(obj.productDescription)
        setProductPrice(obj.productPrice)
        setProductImage(obj.productImage)
        setProductCateogry(obj.productCateogry)
    }
    var updateProduct = async () => {
  let response = await updateProducts(
    {
      productName,
      productDescription,
      productPrice,
      productImage,
      productCateogry
    },
    productId
  );
  alert(response.data.message);
  await getdata(); 
};
    var deleteit=async(pid)=>{
        let res=await deleteProduct(pid)
        alert(res.data.message)
        getdata()
    }

    return(
        <>
        <div className="row">
            {products.map((data)=>(
                <div className="col-md-4" key={data._id}>
                    <div className="card">
                        <div className="card-header">
                            <h2>{data.productName}</h2>
                        </div>
                        <div className="card-body">
                            <p>{data.productDescription}</p>
                            <h3>Price:{data.productPrice}</h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-lg bg-primary text-white" onClick={()=>updateNow(data)} data-bs-toggle="modal" data-bs-target="#updated">Update</button>
                            <button className="btn btn-lg bg-danger text-white" onClick={()=>deleteit(data._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="modal fade" id="updated">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h3>Update Product</h3>
                    <hr />
                    <button className=" btn btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                    <label htmlFor="" className="form-label">Product Name:</label>
                    <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Description:</label>
                    <input type="text" value={productDescription} onChange={(e)=>setProductDescriptions(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Price:</label>
                    <input type="text" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Image URL:</label>
                    <input type="text" value={productImage} onChange={(e)=>setProductImage(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Cateogry:</label>
                    <input type="text" value={productCateogry} onChange={(e)=>setProductCateogry(e.target.value)} className="form-control" />
                </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary text-white" data-bs-dismiss="modal" onClick={()=>updateProduct()}>Update</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}