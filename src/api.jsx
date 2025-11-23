import axios from "axios";
const api=axios.create({
    baseURL:"http://localhost:4300"
})
export var getproducts=()=>api.get("/products")
export var addproducts=(obj)=>api.post("/add",obj)
export var updateProducts=(obj,pid)=>api.put(`/updateProduct/${pid}`,obj)
export var deleteProduct=(pid)=>api.delete(`/delete/${pid}`)