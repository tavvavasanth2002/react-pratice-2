import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard(){
    var navigate=useNavigate()

    useEffect(()=>{
        if(!sessionStorage.getItem("token")){
         navigate("/")   
        }
    })
    var logout=()=>{
        localStorage.clear()
        navigate("/")
    }
    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white d-flex justify-content-center">
            <ul className="navbar-nav ">
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/view">Products</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/add">Add</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/manage">Manage</Link></li>
                <li className="nav-item px-4"><Link className="nav-link" to="/nav/user">Users</Link></li>
                <li className="nav-item"><button onClick={logout}>Log-out</button></li>
            </ul>
        </nav>
        <div className="container">
            <Outlet></Outlet>
        </div>
        </>
    )
}