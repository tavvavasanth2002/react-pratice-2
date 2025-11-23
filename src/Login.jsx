import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    var [userName,setUserName]=useState('')
    var [pwd,setpwd]=useState("")
    var navigate=useNavigate()
    var checkLogin=(e)=>{
        e.preventDefault()
        console.log(userName,pwd)
        if(userName.slice(0,3)+"@123"==pwd){
            alert("Login success")
            navigate("/nav/view")
            localStorage.setItem("username",userName)
        }
        else{
            alert("check username or password")
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