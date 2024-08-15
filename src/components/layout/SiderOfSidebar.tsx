import { selectCorrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { buyerPath } from "@/route/buyerPath";
import { userPath } from "@/route/userPath";
import { sidebarItemGenerator } from "@/utils/sidebarGenerator";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

// const userRole = {
//   USER: "user",
//   BUYER: "buyer",
// };
const userRole = {
  ADMIN: "admin",
  BUYER: "buyer",
};

const SiderOfSidebar = () => {
  const user = useAppSelector(selectCorrentUser) as { role: string };
  console.log(user);
  let sidebarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(userPath, userRole.ADMIN);
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
