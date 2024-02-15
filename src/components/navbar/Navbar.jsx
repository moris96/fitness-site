// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
// import { NavLink } from 'react-router-dom';

// import './Navbar.css';
// import logo from '../../assets/logo.png';

// const Navbar = () => {
//   return (
//     <NavbarBs sticky='top' className='navbar navbar-custom navbar-dark'>
//         <Container>
//           {/* title */}
//             <h1 className='h1color'>Spartan Fitness</h1>

//             {/* logo image */}
//             <img src={logo} alt='logo' className='logo' />

//             {/* navigation */}
//             <Nav className='ms-auto'>
//                 <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
//                 <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
//             </Nav>
//         </Container>
//     </NavbarBs>
//   );
// };

// export default Navbar;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
// import { NavLink } from 'react-router-dom';

// import './Navbar.css';
// import logo from '../../assets/logo.png';

// const Navbar = () => {
//   return (
//     <NavbarBs sticky='top' className='navbar navbar-custom navbar-dark'>
//         <Container>
//           {/* title and logo container */}
//           <div className='title-logo-container'>
//             {/* title */}
//             <h1 className='h1color'>Spartan Fitness</h1>

//             {/* logo image */}
//             <img src={logo} alt='logo' className='logo' />
//           </div>

//           {/* navigation */}
//           <Nav className='ms-auto'>
//               <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
//               <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
//           </Nav>
//         </Container>
//     </NavbarBs>
//   );
// };

// export default Navbar;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import './Navbar.css';

// import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <NavbarBs sticky='top' expand='md' className='navbar navbar-custom navbar-dark'>
      <Container>
        <NavbarBs.Brand>
          <h1 className='h1color'>Spartan Fitness</h1>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/trainers'>Trainers</Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;


