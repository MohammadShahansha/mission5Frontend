import SHForm from "@/components/form/SHForm";
import SHInput from "@/components/form/SHInput";
import { useGetAllShoesQuery } from "@/redux/features/shoesManagement/shoesManagementApi";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const VerifyProduct = () => {
  //   const [ shoesData ] = useGetSingleShoeQuery(undefined);
  const { data: shoesData } = useGetAllShoesQuery(undefined);
  const shoesId = shoesData?.data?.map(({ id }) => {
    return {
      id,
    };
  });
  console.log(shoesId);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // if (shoesId?.map((shoeId) => shoeId.id === data.id)) {
    //   toast.success("verified");
    // } else {
    //   toast.error("not verified");
    // }
    let i;
    {
      shoesId?.map((shoeId) => {
        if (shoeId.id === data.id) {
          i = 1;
        }
      });
    }
    if (i === 1) {
      toast.success("Your product is varified");
    } else {
      toast.error("Ypur Product is not varified");
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <SHForm
          onSubmit={onSubmit}
          //   resolver={zodResolver(shoesValidationSchema)}
        >
          <SHInput type="text" name="id" label="Id" />
          <Button htmlType="submit">Submit</Button>
          {/* <Link to="/buyer/verifiedData">
            <Button htmlType="submit">Submit</Button>
          </Link> */}
        </SHForm>
      </Col>
    </Flex>
  );
};

export default VerifyProduct;
