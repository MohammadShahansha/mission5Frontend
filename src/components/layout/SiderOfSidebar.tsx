import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

const barItems = [
  {
    key: "Shoes Management",
    label: <NavLink to="shoesManagement">Shoes Management</NavLink>,
  },
  {
    key: "Sales Management",
    label: <NavLink to="salesManagement">Sales Management</NavLink>,
  },
  {
    key: "Sales History",
    label: <NavLink to="salesHistory">Sales History</NavLink>,
  },
];

const SiderOfSidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
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
        <h1 style={{}}>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={barItems}
      />
    </Sider>
  );
};

export default SiderOfSidebar;
