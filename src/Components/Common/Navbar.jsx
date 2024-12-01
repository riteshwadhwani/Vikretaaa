import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarr() {
    const[userData,SetUserData] = useState({});
   const data = localStorage.getItem("user_data");
   console.log(data);
   if(data){
    SetUserData(data);
   }
  return (
    <>
      <Navbar className='p-2 flex justify-between  shadow-md border   bg-[#2161a5]' data-bs-theme="dark">
          <Navbar.Brand >Vikreta</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to={"/"}>Home</Link></Nav.Link>
            <Nav.Link ><Link to={"/market"}>Market</Link></Nav.Link>
            <Nav.Link ><Link to={"/aboutus"}>AboutUs</Link></Nav.Link>
            <Nav.Link ><Link to={"/contactus"}>ContactUs</Link></Nav.Link>
          </Nav>
          <Nav className="">
            {
                userData == null ? (<div>Hii</div>) :(<Nav>
                    <Nav.Link ><Link to={"/login"}>LogIn</Link></Nav.Link>
                    <Nav.Link ><Link to={"/signup"}>SignUp</Link></Nav.Link>
                </Nav>)
            }
          </Nav>
      </Navbar>
    </>
  );
}

export default Navbarr;