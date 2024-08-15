import { Card } from "antd";
import { useGetAllBuyerDataQuery } from "@/redux/features/serviceManagement/byerRequestApi";
import { TSellsData } from "@/types/sellsData";
import ModalOfRequest from "@/utils/ModalOfRequest";
import { TShoe } from "@/types/polish";

const SendRequest = () => {
  const { data: selsData } = useGetAllBuyerDataQuery(undefined);
  console.log(selsData);
  const tableData = selsData?.data?.map(
    ({ quantity, date, buyer, shoes, _id }: TSellsData) => ({
      quantity,
      date,
      buyer,
      brand: shoes?.brand,
      name: shoes?.name,
      id: shoes?.id,
      shoesImage: shoes?.shoesImage,
      color: shoes?.color,
      price: shoes?.price,
      model: shoes?.model,
      size: shoes?.size,
      _id,
    })
  );
  console.log(tableData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
      {tableData?.map((shoe: TShoe) => (
        <Card
          hoverable
          className="w-80 mb-5"
          cover={<img alt="shoe" src={shoe.shoesImage} />}
        >
          <div>
            <div className="flex items-center gap-1">
              <h3>Name:</h3>
              <p className="font-medium text-[#34809f]">{shoe.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <h3>Id:</h3>
              <p className="font-medium text-[#34809f]">{shoe.id}</p>
            </div>
          </div>
          <div className="card-actions justify-end w-full">
            <ModalOfRequest {...shoe} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SendRequest;
