import { selectCorrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { buyerPath } from "@/route/buyerPath";
import { userPath } from "@/route/userPath";
import { sidebarItemGenerator } from "@/utils/sidebarGenerator";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

// const barItems = [
//   {
//     key: "Dashboard",
//     label: "Dashboard",
//   },
//   {
//     key: "Shoes Management",
//     label: "Shoes Management",
//     children: [
//       {
//         key: "create shoes",
//         label: <NavLink to="/user/create-shoes">Create Shoes</NavLink>,
//       },
//       {
//         key: "get shoes",
//         label: <NavLink to="/user/shoes-management">Shoes Management</NavLink>,
//       },
//       {
//         key: "Sales Management",
//         label: <NavLink to="/user/salesManagement">Sales Management</NavLink>,
//       },
//     ],
//   },

//   {
//     key: "Sale History",
//     label: <NavLink to="salesHistory">Sales History</NavLink>,
//   },
// ];
const userRole = {
  USER: "user",
  BUYER: "buyer",
};

const SiderOfSidebar = () => {
  const user = useAppSelector(selectCorrentUser) as { role: string };
  console.log(user);
  let sidebarItems;
  switch (user!.role) {
    case userRole.USER:
      sidebarItems = sidebarItemGenerator(userPath, userRole.USER);
      break;
    case userRole.BUYER:
      sidebarItems = sidebarItemGenerator(buyerPath, userRole.BUYER);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-2xl font-semibold">Shoes Shop</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SiderOfSidebar;
