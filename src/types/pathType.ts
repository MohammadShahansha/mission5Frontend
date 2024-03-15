type TPathItem = {
  name: string;
  path: string;
  element: JSX.Element;
};

// Define the type for paths with children
type TPathWithChildren = {
  name: string;
  children: TPathItem[];
};

// Define the union type for both types of paths
export type TPath = TPathItem | TPathWithChildren;
