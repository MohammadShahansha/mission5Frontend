import CreateShoes from "@/pages/shoes/CreateShoes";
import DuplicateOrEditShoes from "@/pages/shoes/DuplicateOrEditShoes";
import UpdateShoes from "@/pages/shoes/UpdateShoes";
import Dashboard from "@/pages/user/Dashboard";
import SalesHistory from "@/pages/user/SalesHistory";
import SalesManagement from "@/pages/user/SalesManagement";
import ShoesManagement from "@/pages/user/ShoesManagement";
import Polish from "@/pages/user/services/Polish";
import { TPath } from "@/types/pathType";

export const userPath: TPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Shoes Management",
    children: [
      {
        name: "create shoes",
        path: "create-shoes",
        element: <CreateShoes />,
      },
      {
        name: "Shoes Management",
        path: "shoes-management",
        element: <ShoesManagement />,
      },
      {
        name: "salseManagement",
        path: "salesManagement",
        element: <SalesManagement />,
      },
      {
        name: "Update Shoes",
        path: "update-shoes",
        element: <UpdateShoes />,
      },
      {
        name: "Duplicate Shoes",
        path: "duplicate-shoes",
        element: <DuplicateOrEditShoes />,
      },
    ],
  },
  {
    name: "Sells History",
    path: "salesHistory",
    element: <SalesHistory />,
  },
  {
    name: "Service Management",
    children: [
      {
        name: "Polish",
        path: "update-polish-request",
        element: <Polish />,
      },
    ],
  },
];

// export const userRoutes = userPath2.reduce((acc: TRoutes[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path!,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const sidebarItem = userPath.reduce((acc: TUserSidebar[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/user/${item.path}`}>{item.name}</NavLink>,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label:
//           child.path !== "update-shoes" && child.path !== "duplicate-shoes" ? (
//             <NavLink to={`/user/${child.path}`}>{child.name}</NavLink>
//           ) : null,
//       })),
//     });
//   }
//   return acc;
// }, []);

// export const userPath = [
//   {
//     path: "create-shoes",
//     element: <CreateShoes />,
//   },
//   {
//     path: "shoes-management",
//     element: <ShoesManagement />,
//   },
//   {
//     path: "salesManagement",
//     element: <SalesManagement />,
//   },
//   {
//     path: "update-shoes",
//     element: <UpdateShoes />,
//   },
//   {
//     path: "duplicate-shoes",
//     element: <DuplicateOrEditShoes />,
//   },
// ];
