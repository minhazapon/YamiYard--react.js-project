import { NavLink } from "react-router-dom";
import logo from './image/r1.jpg'



const Nav = () => {

   const NV = <>
   
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/contact" >Contact</NavLink></li>
      <li><NavLink to="/about" >About</NavLink></li>
      <li><NavLink to="/gl" >Gallery</NavLink></li>
   
   
   
   
   
   
   </>



    return (
        <div>

<div className="navbar bg-base-100 mt-2 shadow-lg p-3 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {NV}
      </ul>
    </div>
    
    <div className=" flex items-center gap-1 ">
    <img className=" h-[70px]" src={logo} alt="" />
    <a className=" text-green-500 text-4xl font-bold ">Yami<span className=" text-orange-500">Yard</span></a>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {NV}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">SignIn</a>
  </div>
</div>
            
        </div>
    );
};

export default Nav;