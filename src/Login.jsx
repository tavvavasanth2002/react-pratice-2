import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api";

export default function Login(){
    var [userName,setUserName]=useState('')
    var [pwd,setpwd]=useState("")
    var navigate=useNavigate()
    var response;
    var checkLogin=async (e)=>{
        e.preventDefault()
        response=await login({"userName":userName,"password":pwd})
        console.log(response)
        if(response.data.token){
            sessionStorage.setItem("token",response.data.token)
            navigate("nav/view")
        }
        else{
            alert(await response.data.message)
        }
        
        
    }
    return(
        <>
        <div className="conbtanier">
            <div className="row">
                <div className="col-md-4">
                    <form action="" onSubmit={checkLogin}>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Username:</label>
                            <input type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Password:</label>
                            <input type="password" className="form-control" onChange={(e)=>setpwd(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg bg-success text-white" type="submit">Login</button>
                            <button className="btn btn-lg bg-danger text-white" type="reset">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}