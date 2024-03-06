import { Button } from "antd";
import { Card } from "antd";
import ModalOfSells from "../../utils/ModalOfSells";
import { useGetAllShoesQuery } from "../../redux/features/shoesManagement/shoesManagementApi";
const SalesManagement = () => {
  const { data: shoesData } = useGetAllShoesQuery(undefined);
  console.log(shoesData?.data);
  const shoesAllData = shoesData?.data?.map(
    ({
      brand,
      color,
      model,
      name,
      price,
      quantity,
      releaseDate,
      size,
      style,
      shoesImage,
      _id,
    }) => {
      return {
        brand,
        color,
        model,
        name,
        price,
        quantity,
        releaseDate,
        size,
        style,
        shoesImage,
        _id,
      };
    }
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {shoesAllData?.map((shoe) => (
        <Card
          hoverable
          className="w-80"
          cover={<img alt="shoe" src={shoe.shoesImage} />}
        >
          <div>
            <div className="flex items-center gap-1">
              <h3>Name:</h3>
              <p className="font-medium text-[#34809f]">{shoe.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <h3>Price:</h3>
              <p className="font-medium text-[#34809f]">{shoe.price}</p>
            </div>
            <div className="flex items-center gap-1">
              <h3>Quantity:</h3>
              <p className="font-medium text-[#34809f]">{shoe.quantity}</p>
            </div>
          </div>
          <div className="card-actions justify-end w-full">
            <Button className="bg-[#00abf0] px-5 w-20 font-semibold hover:bg-[#081b29] hover:text-white">
              Detail
            </Button>
            <ModalOfSells {...shoe} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SalesManagement;
// --bg-color: #081b29;
// --second-bg-color: #111e42;
// --text-color:#ededed;
// --main-color: #00abf0;
