// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light  p-0 m-0">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <img src="/logo.png" alt="./logo.png" width="100" />
//         </Link>
//         <button
//           className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
//           type="button"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//           onClick={toggleMenu}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard/app">
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard/user">
//                 User
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard/products">
//                 Products
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard/blog">
//                 Blog
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login" style={{ color: '#c6b250' }}>
//                 Sign in
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
