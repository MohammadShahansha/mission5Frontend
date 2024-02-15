import { FieldValues, SubmitHandler } from "react-hook-form";
import SHForm from "../../components/form/SHForm";
import SHInput from "../../components/form/SHInput";
import { Button, Col, Flex } from "antd";

const CreateShoes = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <SHForm onSubmit={onSubmit}>
          <SHInput type="text" name="name" label="Name" />
          <SHInput type="number" name="price" label="Price" />
          <SHInput type="text" name="quantity" label="Quantity" />
          <SHInput type="text" name="releaseDate" label="ReleaseDate" />
          <SHInput type="text" name="brand" label="Brand" />
          <SHInput type="text" name="model" label="Model" />
          <SHInput type="text" name="style" label="Style" />
          <SHInput type="text" name="size" label="Size" />
          <SHInput type="text" name="color" label="Color" />
          <SHInput type="text" name="shoesImage" label="Image" />
          <Button htmlType="submit">Submin</Button>
        </SHForm>
      </Col>
    </Flex>
  );
};

export default CreateShoes;
