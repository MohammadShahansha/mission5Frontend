import { Button, Col, Flex } from "antd";
import SHForm from "../../components/form/SHForm";
import SHInput from "../../components/form/SHInput";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateShoesMutation,
  useGetAllShoesQuery,
} from "../../redux/features/shoesManagement/shoesManagementApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { shoesValidationSchema } from "@/schema/shoesValidationSchema";

const DuplicateOrEditShoes = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { shoesData } = location.state || {};
  console.log("shoesData", shoesData);
  const shoesDataWithCorrectForm = {
    name: shoesData.name,
    id: shoesData.id,
    price: shoesData.price.toString(),
    quantity: shoesData.quantity.toString(),
    releaseDate: shoesData.releaseDate,
    brand: shoesData.brand,
    model: shoesData.model,
    style: shoesData.style,
    size: shoesData.size,
    color: shoesData.color,
    shoesImage: shoesData.shoesImage,
  };
  const [duplicateAndEditShoes] = useCreateShoesMutation();
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
      _id,
    } = values;
    const allShoesDataWithCorrectFormate = {
      name,
      id,
      price: Number(price),
      quantity: Number(quantity),
      releaseDate,
      brand,
      model,
      style,
      size,
      color,
      shoesImage,
      _id,
    };

    try {
      const toastId = toast.loading("Loading....");
      await duplicateAndEditShoes(allShoesDataWithCorrectFormate).unwrap();
      toast.success("Duplicate and edited successfully", { id: toastId });
      refetchShoesData();
      Navigate("/user/shoes-management");
    } catch (err) {
      toast.error("somthing wrong....");
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <SHForm
          onSubmit={onSubmit}
          defaultValues={shoesDataWithCorrectForm}
          // resolver={zodResolver(shoesValidationSchema)}
        >
          <SHInput type="text" name="name" label="Name" />
          <SHInput
            type="text"
            name="id"
            label="Id(must be changed and unique)"
          />
          <SHInput type="text" name="price" label="Price" />
          <SHInput type="text" name="quantity" label="Quantity" />
          <SHInput type="text" name="releaseDate" label="ReleaseDate" />
          {/* <SHDatePicker name="releaseDate" label="ReleaseDate" /> */}
          <SHInput type="text" name="brand" label="Brand" />
          <SHInput type="text" name="model" label="Model" />
          <SHInput type="text" name="style" label="Style" />
          <SHInput type="text" name="size" label="Size" />
          <SHInput type="text" name="color" label="Color" />
          <SHInput type="text" name="shoesImage" label="Image" />
          <Button htmlType="submit">Submit</Button>
        </SHForm>
      </Col>
    </Flex>
  );
};

export default DuplicateOrEditShoes;
