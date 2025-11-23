
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Login'
import Dashboard from './user/Dashboard'
import View from './user/View'

import Manage from './user/Manage'
import AddProduct from './user/AddProduct'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/nav" element={<Dashboard></Dashboard>}>
        <Route path="view" element={<View></View>}></Route>
        <Route path="add" element={<AddProduct></AddProduct>}></Route>
        <Route path="manage" element={<Manage></Manage>}></Route>
        </Route>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
