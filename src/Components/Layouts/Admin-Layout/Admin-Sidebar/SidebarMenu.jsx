// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Added FaAngleUp for toggle icon
// import { NavLink } from 'react-router-dom';

// const SidebarMenu = ({ route, IsOpen }) => {
//   const [isExpanded, setIsExpanded] = useState(false); // Added state for submenu expansion

//   return (
//     <>
//       <div className='sub_menu' onClick={() => setIsExpanded(!isExpanded)}> {/* Added onClick to toggle submenu */}
//         <div className='menu_items'>
//           <div className='icon'>{route.icon}</div>
//           <AnimatePresence>
//             {IsOpen && (
//               <motion.div
//                 className='link_text'
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {route.name}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//         <div>
//           {IsOpen && (isExpanded ? <FaAngleUp /> : <FaAngleDown />)}
//         </div>
//       </div>

//       <AnimatePresence>
//         {isExpanded && ( // Conditional rendering of submenu based on isExpanded state
//           <motion.div
//             className='Menu_container'
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {route.subRoutes.map((subRoute, i) => ( // Added return statement for rendering subRoutes
//               <NavLink
//                 to={subRoute.path}
//                 key={i}
//                 className={({ isActive }) =>
//                   isActive ? 'sidebar_subMenu active' : 'sidebar_subMenu'
//                 }
//               >
//                 <div className='icon'>{subRoute.icon}</div>
//                 <AnimatePresence>
//                   {IsOpen && (
//                     <motion.div
//                       className='link_text'
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {subRoute.name}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </NavLink>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default SidebarMenu;
