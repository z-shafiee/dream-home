import React from 'react'; 
function Navbar()
 { return ( <nav className="navbar"> 
 <div className="logo">Dwello</div> 
 <ul className="nav-links"> 
    <li>Home</li>
     <li>Service</li>
      <li>Agents</li> 
      <li>Contact</li>
       </ul>
        <div className="nav-actions"> 
            <button className="search-icon">🔍</button> 
            <button className="sign-up">Sign Up</button>
             </div> </nav> ); }
              export default Navbar;
