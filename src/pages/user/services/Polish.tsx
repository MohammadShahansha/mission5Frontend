import { useGetAllPolishRequsetQuery } from "@/redux/features/serviceManagement/byerRequestApi";
import { TRequestedProduct } from "@/types/polish";
import ModalOfUpdateRequest from "@/utils/ModalOfUpdateRequest";
import { Card } from "antd";

const Polish = () => {
  const { data: polishRequestData } = useGetAllPolishRequsetQuery(undefined);
  console.log(polishRequestData?.data);
  const productData = polishRequestData?.data?.map(
    ({ requestedProduct, status, _id }: TRequestedProduct) => ({
      requestedProduct,
      status,
      _id,
    })
  );
  console.log(productData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {productData?.map((product: TRequestedProduct) => (
        <Card
          hoverable
          className="w-80 mb-5"
          cover={
            <img
              alt="shoe"
              src={product?.requestedProduct?.shoes?.shoesImage}
            />
          }
        >
          <div>
            <div className="flex items-center gap-1">
              <ModalOfUpdateRequest {...product} />
            </div>
            <div className="flex items-center gap-1">
              {/* <h3>Price:</h3>
              <p className="font-medium text-[#34809f]">{shoe.price}</p> */}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Polish;
