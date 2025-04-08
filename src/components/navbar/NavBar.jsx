// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Home, Settings, Bell, User, Menu, X } from "lucide-react";
// import logoMen from "../../assets/menu/logo_menu.svg";

// const menuItems = [
//   {
//     icon: <Home className="h-5 w-5" />,
//     label: "Home",
//     href: "/emplacamiento",
//     gradient:
//       "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: <Bell className="h-5 w-5" />,
//     label: "Solicitudes",
//     href: "/emplacamiento/solicitudes",
//     gradient:
//       "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
//     iconColor: "text-orange-500",
//   },

//   {
//     icon: <User className="h-5 w-5" />,
//     label: "Perfil",
//     href: "#",
//     gradient:
//       "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
//     iconColor: "text-red-500",
//   },
// ];

// const itemVariants = {
//   initial: { rotateX: 0, opacity: 1 },
//   hover: { rotateX: -90, opacity: 0 },
// };

// const backVariants = {
//   initial: { rotateX: 90, opacity: 0 },
//   hover: { rotateX: 0, opacity: 1 },
// };

// const glowVariants = {
//   initial: { opacity: 0, scale: 0.8 },
//   hover: {
//     opacity: 1,
//     scale: 2,
//     transition: {
//       opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
//       scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
//     },
//   },
// };

// const sharedTransition = {
//   type: "spring",
//   stiffness: 100,
//   damping: 20,
//   duration: 0.5,
// };

// export function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={logoMen} alt="Logo" className="h-8 w-auto" />
//         </div>
//         <div className="flex items-center gap-4">
//           <ul className="hidden md:flex items-center gap-2 relative z-10">
//             {menuItems.map((item) => (
//               <motion.li key={item.label} className="relative">
//                 <motion.div
//                   className="block rounded-xl overflow-visible group relative"
//                   style={{ perspective: "600px" }}
//                   whileHover="hover"
//                   initial="initial"
//                 >
//                   <motion.div
//                     className="absolute inset-0 z-0 pointer-events-none"
//                     variants={glowVariants}
//                     style={{
//                       background: item.gradient,
//                       opacity: 0,
//                       borderRadius: "16px",
//                     }}
//                   />
//                   <motion.a
//                     href={item.href}
//                     className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
//                     variants={itemVariants}
//                     transition={sharedTransition}
//                     style={{
//                       transformStyle: "preserve-3d",
//                       transformOrigin: "center bottom",
//                     }}
//                   >
//                     <span
//                       className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
//                     >
//                       {item.icon}
//                     </span>
//                     <span>{item.label}</span>
//                   </motion.a>
//                   <motion.a
//                     href={item.href}
//                     className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
//                     variants={backVariants}
//                     transition={sharedTransition}
//                     style={{
//                       transformStyle: "preserve-3d",
//                       transformOrigin: "center top",
//                       rotateX: 90,
//                     }}
//                   >
//                     <span
//                       className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
//                     >
//                       {item.icon}
//                     </span>
//                     <span>{item.label}</span>
//                   </motion.a>
//                 </motion.div>
//               </motion.li>
//             ))}
//           </ul>
//           <button onClick={() => setIsOpen(!isOpen)} className=" md:hidden p-2">
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <motion.ul
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="md:hidden flex flex-col mt-4 gap-2 relative z-10"
//         >
//           {menuItems.map((item) => (
//             <li key={item.label} className="relative">
//               <a
//                 href={item.href}
//                 className="flex items-center gap-2 px-4 py-2 bg-transparent text-muted-foreground transition-colors rounded-xl hover:text-foreground"
//               >
//                 <span className={`${item.iconColor}`}>{item.icon}</span>
//                 <span>{item.label}</span>
//               </a>
//             </li>
//           ))}
//         </motion.ul>
//       )}
//     </nav>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Home, Bell, User, Menu, X, ChevronDown } from "lucide-react";
// import logoMen from "../../assets/menu/logo_menu.svg";

// const menuItems = [
//   {
//     icon: <Home className="h-5 w-5" />,
//     label: "Home",
//     href: "/emplacamiento",
//     gradient:
//       "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
//     iconColor: "text-blue-500",
//     subItems: [
//       { label: "Dashboard", href: "/emplacamiento/dashboard" },
//       { label: "Reports", href: "/emplacamiento/reports" },
//     ],
//   },
//   {
//     icon: <Bell className="h-5 w-5" />,
//     label: "Solicitudes",
//     href: "/emplacamiento/solicitudes",
//     gradient:
//       "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
//     iconColor: "text-orange-500",
//     subItems: [
//       { label: "Agregar Solicitud", href: "/emplacamiento/solicitudes/pending" },
//       { label: "Approved", href: "/emplacamiento/solicitudes/approved" },
//     ],
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: "Perfil",
//     href: "#",
//     gradient:
//       "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
//     iconColor: "text-red-500",
//     subItems: [
//       { label: "Account", href: "/emplacamiento/perfil/account" },
//       { label: "Settings", href: "/emplacamiento/perfil/settings" },
//     ],
//   },
// ];

// export function NavBar() {
//   // Estado para el menú móvil y para controlar qué submenú está abierto
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleOpenDropdown = (label) => {
//     setOpenDropdown(label);
//   };

//   const handleCloseDropdown = () => {
//     setOpenDropdown(null);
//   };

//   // Para móvil, togglear con clic
//   const handleToggleDropdown = (label) => {
//     setOpenDropdown((prev) => (prev === label ? null : label));
//   };

//   return (
//     <nav className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative md:overflow-visible">
//       {/* Cabecera: logo a la izquierda y menú/botón a la derecha */}
//       <div className="flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={logoMen} alt="Logo" className="h-8 w-auto" />
//         </div>
//         <div className="flex items-center gap-4">
//           {/* Menú de escritorio */}
//           <ul className="hidden md:flex items-center gap-2 relative z-10">
//             {menuItems.map((item) => (
//               <li
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() => item.subItems && handleOpenDropdown(item.label)}
//                 onMouseLeave={() => item.subItems && handleCloseDropdown()}
//               >
//                 <a
//                   href={item.href}
//                   className="flex items-center gap-2 px-4 py-2 bg-transparent text-muted-foreground transition-colors rounded-xl"
//                 >
//                   <span className={item.iconColor}>{item.icon}</span>
//                   <span>{item.label}</span>
//                   {item.subItems && <ChevronDown className="h-4 w-4" />}
//                 </a>
//                 {item.subItems && openDropdown === item.label && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20"
//                   >
//                     {item.subItems.map((sub) => (
//                       <li key={sub.label}>
//                         <a
//                           href={sub.href}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           {sub.label}
//                         </a>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//           {/* Botón para menú móvil */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>
//       {/* Menú móvil desplegable */}
//       {isOpen && (
//         <motion.ul
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden flex flex-col mt-4 gap-2 relative z-10"
//         >
//           {menuItems.map((item) => (
//             <li key={item.label} className="relative">
//               <div className="flex items-center gap-1">
//                 <a
//                   href={item.href}
//                   className="flex items-center gap-2 px-4 py-2 bg-transparent text-muted-foreground transition-colors rounded-xl hover:text-foreground"
//                 >
//                   <span className={item.iconColor}>{item.icon}</span>
//                   <span>{item.label}</span>
//                 </a>
//                 {item.subItems && (
//                   <button
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleToggleDropdown(item.label);
//                     }}
//                     className="p-1"
//                   >
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                 )}
//               </div>
//               {item.subItems && openDropdown === item.label && (
//                 <ul className="pl-4">
//                   {item.subItems.map((sub) => (
//                     <li key={sub.label}>
//                       <a
//                         href={sub.href}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         {sub.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </motion.ul>
//       )}
//     </nav>
//   );
// }
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Home, Bell, User, Menu, X, ChevronDown } from "lucide-react";
import logoMen from "../../assets/menu/logo_menu.svg";

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/emplacamiento",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
    // subItems: [
    //   { label: "Dashboard", href: "/emplacamiento/dashboard" },
    //   { label: "Reports", href: "/emplacamiento/reports" },
    // ],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: "Solicitudes",
    href: "/emplacamiento/solicitudes",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
    subItems: [
      { label: "Solicitudes", href: "/emplacamiento/solicitudes" },
      { label: "Nueva Solicitud", href: "/emplacamiento/add-solicitud" },
    ],
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Perfil",
    href: "#",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
    subItems: [
      { label: "Account", href: "/emplacamiento/perfil/account" },
      { label: "Settings", href: "/emplacamiento/perfil/settings" },
    ],
  },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  // En el elemento principal: al entrar se cancela el timeout y se abre el dropdown
  const handleMouseEnterItem = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  // Al salir del área principal, se inicia un timeout para cerrar el dropdown
  const handleMouseLeaveItem = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500); // 500ms de retraso
  };

  // Para el submenú: solo cancelamos el cierre al entrar, sin cambiar el estado
  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
  };

  // Para móvil, togglear con clic
  const handleToggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <nav className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative md:overflow-visible">
      {/* Cabecera: logo a la izquierda y menú/botón a la derecha */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoMen} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          {/* Menú de escritorio */}
          <ul className="hidden md:flex items-center gap-2 relative z-10">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.subItems && handleMouseEnterItem(item.label)
                }
                onMouseLeave={() => item.subItems && handleMouseLeaveItem()}
              >
                <motion.div
                  className="relative rounded-xl overflow-visible"
                  style={{ perspective: "600px" }}
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { rotateX: 0, scale: 1, opacity: 1 },
                    hover: {
                      rotateX: -15,
                      scale: 1.05,
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      hover: {
                        opacity: 1,
                        scale: 1.1,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      },
                    }}
                  />
                  <a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 bg-transparent text-muted-foreground transition-colors rounded-xl relative z-10"
                  >
                    <span className={item.iconColor}>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.subItems && <ChevronDown className="h-4 w-4" />}
                  </a>
                </motion.div>
                {/* Submenú: cubre tanto el área del elemento principal como el propio submenú */}
                {item.subItems && openDropdown === item.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20"
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleSubmenuMouseLeave}
                  >
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
          {/* Botón para menú móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Menú móvil desplegable */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col mt-4 gap-2 relative z-10"
        >
          {menuItems.map((item) => (
            <li key={item.label} className="relative">
              <div className="flex items-center gap-1">
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 bg-transparent text-muted-foreground transition-colors rounded-xl hover:text-foreground"
                >
                  <span className={item.iconColor}>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
                {item.subItems && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleDropdown(item.label);
                    }}
                    className="p-1"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                )}
              </div>
              {item.subItems && openDropdown === item.label && (
                <ul className="pl-4">
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
