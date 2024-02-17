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
    }) => ({
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
    })
  );
  console.log(name);
  return (
    // <div>
    //   <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
    //     <figure className="">
    //       <img
    //         className="w-full"
    //         src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //         alt="Shoes"
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">Shoes!</h2>
    //       <p>If a dog chews shoes whose shoes does he choose?</p>
    //       <div className="card-actions justify-end w-full">
    //         <Button className="bg-[#00abf0] px-5 w-20 font-semibold hover:bg-[#081b29] hover:text-white">
    //           Detail
    //         </Button>
    //         <Button className="bg-[#00abf0] px-5 w-20 font-semibold hover:bg-[#081b29] hover:text-white">
    //           Sell
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
