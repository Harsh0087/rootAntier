import React from 'react'
import Pathconstants from './Pathconstants'

const Home = React.lazy( () => import ("../Pages/Home")) 
const AboutUs = React.lazy( () => import("../Pages/AboutUs"))
const Team = React.lazy( () => import("../Pages/Team"))
const Portfolio = React.lazy( () => import("../Pages/Portfolio"))

const routes =[
    {path:Pathconstants.HOME , element: <Home/>},
    {path:Pathconstants.ABOUT , element: <AboutUs/>},
    {path:Pathconstants.PORTFOLIO , element: <Portfolio/>},
    {path:Pathconstants.TEAM , element: <Team/>}
]
export default routes