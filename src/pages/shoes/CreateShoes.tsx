import { FieldValues, SubmitHandler } from "react-hook-form";
import SHForm from "../../components/form/SHForm";
import SHInput from "../../components/form/SHInput";
import { Button, Col, Row } from "antd";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { shoesValidationSchema } from "../../schema/shoesValidationSchema";
import { useCreateShoesMutation } from "../../redux/features/shoesManagement/shoesManagementApi";
import { toast } from "sonner";
const CreateShoes = () => {
  const [addShoes] = useCreateShoesMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const toasId = toast.loading("creating......");
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
    } = data;

    const shoesData = {
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
    };

    try {
      const res = await addShoes(shoesData);
      toast.success("shoes created successfully", { id: toasId });
      console.log(res);
    } catch (error) {
      toast.error("somthing wrong", { id: toasId });
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col span={6} xs={24} sm={18} md={12} className="sm:w-full">
        <SHForm
          onSubmit={onSubmit}
          // resolver={zodResolver(shoesValidationSchema)}
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
          <Button
            htmlType="submit"
            className="bg-[#00abf0] px-5  font-semibold hover:bg-[#081b29] hover:text-white"
          >
            Submit
          </Button>
        </SHForm>
      </Col>
    </Row>
  );
};

export default CreateShoes;
