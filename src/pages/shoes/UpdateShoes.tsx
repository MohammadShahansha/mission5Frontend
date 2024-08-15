import { Button, Col, Row } from "antd";
import SHForm from "../../components/form/SHForm";
import SHInput from "../../components/form/SHInput";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetAllShoesQuery,
  useUpdateShoesMutation,
} from "../../redux/features/shoesManagement/shoesManagementApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
const UpdateShoes = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { shoesData } = location.state || {};
  console.log("shoesData", shoesData);
  const [toUpdateData] = useUpdateShoesMutation();
  const { refetch: refetchShoesData } = useGetAllShoesQuery(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log("values", values);
    const {
      name,
      id,
      price,
      quantity,
      releaseDate,
      brand,
      model,
      style,
      size,
      color,
      shoesImage,
    } = values;
    const allShoesDataWithCorrectFormate = {
      name,
      id,
      price: Number(price),
      quantity: Number(quantity),
      // price,
      // quantity,
      releaseDate,
      brand,
      model,
      style,
      size,
      color,
      shoesImage,
      _id: shoesData.key,
    };
    const toastId = toast.loading("Loading....");
    try {
      //   const shoesAllData = { shoesData, ...allShoesDataWithCorrectFormate };
      console.log(allShoesDataWithCorrectFormate);
      await toUpdateData(allShoesDataWithCorrectFormate).unwrap();
      toast.success("Updated successfully", { id: toastId });
      refetchShoesData();
      Navigate("/admin/shoes-management");
    } catch (err) {
      toast.error("somthing wrong....");
    }
  };
  return (
    <Row justify="center" align="middle">
      <Col span={6} xs={24} sm={18} md={12} className="sm:w-full">
        <SHForm
          onSubmit={onSubmit}
          defaultValues={shoesData}
          //   initialValues={shoesData?.data}
          //   resolver={zodResolver(shoesValidationSchema)}
        >
          <SHInput type="text" name="name" label="Name" />
          <SHInput type="text" name="id" label="Id" />
          <SHInput type="text" name="price" label="Price" />
          <SHInput type="text" name="quantity" label="Quantity" />
          <SHInput type="text" name="releaseDate" label="ReleaseDate" />
          <SHInput type="text" name="brand" label="Brand" />
          <SHInput type="text" name="model" label="Model" />
          <SHInput type="text" name="style" label="Style" />
          <SHInput type="text" name="size" label="Size" />
          <SHInput type="text" name="color" label="Color" />
          <SHInput type="text" name="shoesImage" label="Image" />
          <Button htmlType="submit">Submit</Button>
        </SHForm>
      </Col>
    </Row>
  );
};

export default UpdateShoes;
