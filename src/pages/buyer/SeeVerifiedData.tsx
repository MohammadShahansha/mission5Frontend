import { useLocation } from "react-router-dom";

const SeeVerifiedData = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>varified data</h1>
    </div>
  );
};

export default SeeVerifiedData;
