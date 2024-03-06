import { FieldValues, SubmitHandler } from "react-hook-form";
import SHForm from "../../components/form/SHForm";
import SHInput from "../../components/form/SHInput";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { shoesValidationSchema } from "../../schema/shoesValidationSchema";
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
      // price,
      // quantity,
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
      // console.log(res.error);
      // if (res.error) {
      //   toast.error(res.error.data);
      // } else {
      //   toast.success("shoes created");
      // }
      console.log(res);
    } catch (error) {
      toast.error("somthing wrong", { id: toasId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <SHForm
          onSubmit={onSubmit}
          resolver={zodResolver(shoesValidationSchema)}
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
    </Flex>
  );
};

export default CreateShoes;
