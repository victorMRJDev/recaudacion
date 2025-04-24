import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  FilePenLine,
  CarFront,
  FileText,
} from "lucide-react";
import logoMen from "../../assets/menu/logo_menu.svg";
import { href } from "react-router";

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Inicio",
    href: "/emplacamiento",
    iconColor: "text-sefi-letter",
  },
  {
    icon: <FilePenLine className="h-5 w-5" />,
    label: "Solicitudes",
    href: "/emplacamiento/solicitudes",
    iconColor: "text-sefi-letter",
    subItems: [
      { label: "Solicitudes", href: "/emplacamiento/solicitudes" },
      {
        label: "Validaciones atendidas",
        href: "/emplacamiento/validatendidas",
      },
      { label: "Nueva Solicitud", href: "/emplacamiento/add-solicitud" },
    ],
  },
  {
    icon: <CarFront className="h-5 w-5" />,
    label: "Gestión de almacen",
    href: "#",
    iconColor: "text-sefi-letter",
    // subItems: [
    //   { label: "Account", href: "/emplacamiento/perfil/account" },
    //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
    // ],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Reportes",
    href: "#",
    iconColor: "text-sefi-letter",
    // subItems: [
    //   { label: "Account", href: "/emplacamiento/perfil/account" },
    //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
    // ],
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Ayuda e información",
    href: "#",
    iconColor: "text-sefi-letter",
    // subItems: [
    //   { label: "Account", href: "/emplacamiento/perfil/account" },
    //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
    // ],
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Cerrar sesión",
    href: "#",
    iconColor: "text-sefi-letter",
    // subItems: [
    //   { label: "Account", href: "/emplacamiento/perfil/account" },
    //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
    // ],
  },
];

export function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleItemClick = (item) => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
    setSelectedItem(item.label);

    if (item.subItems) {
      setOpenDropdown((prev) => (prev === item.label ? null : item.label));
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <motion.aside
        animate={{ width: sidebarOpen ? 240 : 64 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col h-full bg-white border-r border-gray-200 relative"
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-0 translate-x-1/2 bg-white border border-gray-200 rounded-full p-1 shadow z-20"
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </button>
        <div
          className={`flex items-center ${
            sidebarOpen ? "justify-start pl-4" : "justify-center"
          } py-4`}
        >
          <img src={logoMen} alt="Logo" className="h-8 w-auto" />
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label} className="relative">
                <button
                  onClick={() => handleItemClick(item)}
                  className={`
                    flex items-center w-full p-2 rounded-lg transition-colors
                    ${
                      selectedItem === item.label
                        ? "bg-blue-100"
                        : "hover:bg-gray-100"
                    }
                  `}
                >
                  <span className={item.iconColor}>{item.icon}</span>
                  {sidebarOpen && (
                    <span className="ml-3 flex-1 text-sm text-gray-700">
                      {item.label}
                    </span>
                  )}
                  {item.subItems && sidebarOpen && (
                    <ChevronDown
                      className={`
                        h-4 w-4 transform transition-transform
                        ${openDropdown === item.label ? "rotate-180" : ""}
                      `}
                    />
                  )}
                </button>
                {item.subItems &&
                  openDropdown === item.label &&
                  sidebarOpen && (
                    <ul className="pl-8 mt-1 space-y-1">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            className="block text-sm px-2 py-1 rounded hover:bg-gray-50"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>
      <div>
        <main className="flex-1 p-2 bg-white"></main>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Home,
//   Bell,
//   User,
//   ChevronLeft,
//   ChevronRight,
//   ChevronDown,
//   Menu as MenuIcon,
// } from "lucide-react";
// import logoMen from "../../assets/menu/logo_menu.svg";

// const menuItems = [
//   {
//     icon: <Home className="h-5 w-5" />,
//     label: "Home",
//     href: "/emplacamiento",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: <Bell className="h-5 w-5" />,
//     label: "Solicitudes",
//     href: "/emplacamiento/solicitudes",
//     iconColor: "text-orange-500",
//     subItems: [
//       { label: "Solicitudes", href: "/emplacamiento/solicitudes" },
//       { label: "Nueva Solicitud", href: "/emplacamiento/add-solicitud" },
//     ],
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: "Perfil",
//     href: "#",
//     iconColor: "text-red-500",
//     subItems: [
//       { label: "Account", href: "/emplacamiento/perfil/account" },
//       { label: "Settings", href: "/emplacamiento/perfil/settings" },
//     ],
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: "Gestión de almacen",
//     href: "#",
//     iconColor: "text-red-500",
//     // subItems: [
//     //   { label: "Account", href: "/emplacamiento/perfil/account" },
//     //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
//     // ],
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: "Reportes",
//     href: "#",
//     iconColor: "text-red-500",
//     // subItems: [
//     //   { label: "Account", href: "/emplacamiento/perfil/account" },
//     //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
//     // ],
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: "Ayuda e información",
//     href: "#",
//     iconColor: "text-red-500",
//     // subItems: [
//     //   { label: "Account", href: "/emplacamiento/perfil/account" },
//     //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
//     // ],
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: "Cerrar sesión",
//     href: "#",
//     iconColor: "text-red-500",
//     // subItems: [
//     //   { label: "Account", href: "/emplacamiento/perfil/account" },
//     //   { label: "Settings", href: "/emplacamiento/perfil/settings" },
//     // ],
//   },
// ];

// export function NavBar() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   const handleToggleDropdown = (label) =>
//     setOpenDropdown((prev) => (prev === label ? null : label));

//   return (
//     <div className="flex h-screen">
//       <motion.aside
//         animate={{ width: sidebarOpen ? 240 : 64 }}
//         transition={{ duration: 0.25 }}
//         className="bg-white border-r border-gray-200 flex flex-col relative"
//       >
//         {" "}
//         <button
//           onClick={toggleSidebar}
//           className="absolute top-4 right-[-12px] bg-white border border-gray-200 rounded-full p-1 shadow"
//         >
//           {sidebarOpen ? (
//             <ChevronLeft className="h-5 w-5" />
//           ) : (
//             <ChevronRight className="h-5 w-5" />
//           )}
//         </button>
//         <div
//           className={`flex items-center ${
//             sidebarOpen ? "justify-start pl-4" : "justify-center"
//           } py-4`}
//         >
//           <img src={logoMen} alt="Logo" className="h-8 w-auto" />
//           {sidebarOpen && ""}
//         </div>
//         <nav className="flex-1 overflow-y-auto">
//           <ul className="space-y-1">
//             {menuItems.map((item) => (
//               <li key={item.label}>
//                 <div>
//                   <button
//                     onClick={() =>
//                       item.subItems ? handleToggleDropdown(item.label) : null
//                     }
//                     className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 transition-colors ${
//                       openDropdown === item.label
//                         ? "bg-gray-100"
//                         : "bg-transparent"
//                     }`}
//                   >
//                     <span className={item.iconColor}>{item.icon}</span>
//                     {sidebarOpen && (
//                       <span className="ml-3 flex-1 text-sm text-gray-700">
//                         {item.label}
//                       </span>
//                     )}
//                     {item.subItems && sidebarOpen && (
//                       <ChevronDown
//                         className={`h-4 w-4 transform transition-transform ${
//                           openDropdown === item.label ? "rotate-180" : ""
//                         }`}
//                       />
//                     )}
//                   </button>
//                   {item.subItems &&
//                     openDropdown === item.label &&
//                     sidebarOpen && (
//                       <ul className="pl-8 mt-1 space-y-1">
//                         {item.subItems.map((sub) => (
//                           <li key={sub.label}>
//                             <a
//                               href={sub.href}
//                               className="block text-sm px-2 py-1 rounded hover:bg-gray-50"
//                             >
//                               {sub.label}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </motion.aside>

//       {/* <main className="flex-1 p-6 bg-gray-50">
//       </main> */}
//     </div>
//   );
// }
