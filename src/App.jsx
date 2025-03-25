// import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import Navber from './Components/Navber';
import Home from './Components/Home';
import Paste from './Components/Paste';
import ViewPaste from './Components/ViewPaste';



const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div> 
          <Navber/>
          <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div> 
       <Navber/>
       <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div> 
       <Navber/>
       <ViewPaste/>
      </div>
    }
  ]
);
function App() {

  return (
     <div>
      <RouterProvider router={router}/>
     </div>
  )
}

export default App
