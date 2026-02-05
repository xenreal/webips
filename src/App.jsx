import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Stair from './comps/Common/Stair'
import Domain from './pages/Domain'
import Events from './pages/Events'
import About from './pages/About'
import Team from './pages/Team'


function App() {
  const router = createBrowserRouter([
        {path: "/",
         element: <Stair/>,
         children: [
           { 
             path:"/",
             element: <Home/>
           },
           { 
             path:"/contacts",
             element: <Contact/>
           },
           { 
             path:"/domains",
             element: <Domain/>
           },
           { 
             path:"events",
             element: <Events/>
           },
           {
             path: "/projects",
             element: <Projects/> 
           },
           {
             path: "/about",
             element: <About/> 
           },
           {
             path: "/team",
             element: <Team/> 
           },
          ]},
        // {

        //   path:"/user/:username",
        //   element: <><Navbar/> <User/> </>
        // }
    ])

 
    
  return (
    <>
      

      <div className='overflow-x-hidden'>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
