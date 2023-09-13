import React from "react";
import { NavLink } from "react-router-dom";



export const NavBar =() => {
return ( <>
<nav>
    <ul style={{display:"flex"}}>
        <li style={{listStyle:"none", marginRight:"20px"}}><NavLink  style={{textDecoration:"none"}}>Home</NavLink></li>
        <li style={{listStyle:"none",  marginRight:"20px"}}><NavLink to={"/catalog"} style={{textDecoration:"none"}}>Catalog</NavLink></li>
        <li style={{listStyle:"none",  marginRight:"20px"}}><NavLink style={{textDecoration:"none"}}>Favorite</NavLink></li>
        
    </ul>
</nav>

</>)


}