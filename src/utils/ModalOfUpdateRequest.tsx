import SHForm from "@/components/form/SHForm";
import SHSelect from "@/components/form/SHSelect";
import { useUpdatePolishStatusMutation } from "@/redux/features/serviceManagement/byerRequestApi";
import { TRequestedProduct } from "@/types/polish";
import { Button, Modal } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ModalOfUpdateRequest = (product: TRequestedProduct) => {
  console.log(product);
  const progressOptions = [
    {
      value: "Working",
      label: "working",
    },
    {
      value: "Product on the way",
      label: "product on the way",
    },
    {
      value: "Delevered successfull",
      label: "Delevered successfull",
    },
  ];
  const [updatePolishRequestStatus] = useUpdatePolishStatusMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Product is updating........");
    const updateStatus = {
      status: data.status,
      _id: product._id,
    };
    try {
      await updatePolishRequestStatus(updateStatus);
      toast.success("Successfully update suatus", { id: toastId });
    } catch (error) {
      toast.error("Somthing wrong your when update status", { id: toastId });
    }
  };
  //   const defaultValue = {
  //     status: "pending",
  //   };
  return (
    <>
      <Button
        className="bg-[#00abf0] px-5  font-semibold hover:bg-[#081b29] hover:text-white"
        onClick={showModal}
      >
        Update Progress
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <SHForm
          onSubmit={onSubmit}
          //   defaultValues={defaultValue}
          // resolver={zodResolver(sellsValidationSchema)}
        >
          <SHSelect label="status" name="status" options={progressOptions} />
          <Button
            className="bg-[#00abf0] px-5 w-20 font-semibold hover:bg-[#081b29] hover:text-white"
            htmlType="submit"
          >
            Submit
          </Button>
        </SHForm>
      </Modal>
    </>
  );
};

export default ModalOfUpdateRequest;
