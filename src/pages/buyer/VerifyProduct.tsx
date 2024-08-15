import SHForm from "@/components/form/SHForm";
import SHInput from "@/components/form/SHInput";
import { useGetAllShoesQuery } from "@/redux/features/shoesManagement/shoesManagementApi";
import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Swal from "sweetalert2";

const VerifyProduct = () => {
  const { data: shoesData } = useGetAllShoesQuery(undefined);
  const shoesId = shoesData?.data?.map(({ id }) => {
    return {
      id,
    };
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");
    shoesId?.forEach((shoeId) => {
      if (shoeId.id === data.id) {
        toast.success("Your product is varified", { id: toastId });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your product is varified",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        toast.error("Your Product is not varified", { id: toastId });
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Your product is not varified",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <Row justify="center" align="middle">
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-5">
          Verifiy your product using shoes Id
        </h2>
        <Col span={24} className="sm:w-full md:w-1/6">
          <SHForm
            onSubmit={onSubmit}
            //   resolver={zodResolver(shoesValidationSchema)}
          >
            <SHInput type="text" name="id" label="Id" />
            <Button
              htmlType="submit"
              className=" bg-[#00abf0] px-5 font-semibold hover:bg-[#081b29] hover:text-white"
            >
              Submit
            </Button>
          </SHForm>
        </Col>
      </div>
    </Row>
  );
};

export default VerifyProduct;
