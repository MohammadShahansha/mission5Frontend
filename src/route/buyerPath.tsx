import BuyerDashboard from "@/pages/buyer/BuyerDashboard";
import SendRequest from "@/pages/buyer/SendRequest";
import UpdateRequest from "@/pages/buyer/SeePolishRequestUpdate";
import VerifyProduct from "@/pages/buyer/VerifyProduct";
import SeeVerifiedData from "@/pages/buyer/SeeVerifiedData";
export const buyerPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <BuyerDashboard />,
  },
  {
    name: "Polish",
    children: [
      {
        name: "Request to Polish",
        path: "polish-request",
        element: <SendRequest />,
      },
      {
        name: "See Update",
        path: "request-update",
        element: <UpdateRequest />,
      },
    ],
  },
  {
    name: "Product Verify",
    path: "productVerify",
    element: <VerifyProduct />,
  },
  {
    // name: "verified",
    path: "verifiedData",
    element: <SeeVerifiedData />,
  },
];
