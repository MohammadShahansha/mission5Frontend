import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

type TUserSidebar = {
  key: string;
  label: ReactNode;
  children?: TUserSidebar[];
};

export const sidebarItemGenerator = (items: TUserPath[], role: string) => {
  const sidebarItem = items.reduce((acc: TUserSidebar[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item?.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item?.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          // label:
          //   child.path !== "verifiedData" &&
          //   child.path !== "update-shoes" &&
          //   child.path !== "duplicate-shoes" ? (
          //     <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
          //   ) : null,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);

  return sidebarItem;
};
