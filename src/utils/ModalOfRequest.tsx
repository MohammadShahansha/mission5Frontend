import SHForm from "@/components/form/SHForm";
import SHInput from "@/components/form/SHInput";
import { useCreatePolishRequestMutation } from "@/redux/features/serviceManagement/byerRequestApi";
import { TShoe } from "@/types/polish";
import { Button, Modal } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ModalOfRequest = (shoe: TShoe) => {
  const [sendPolishRequest] = useCreatePolishRequestMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const defaultValue = {
    status: "pending",
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Product is selling........");
    const requestedProducts = {
      status: data.status,
      requestedProduct: shoe._id,
    };
    try {
      await sendPolishRequest(requestedProducts);
      toast.success("Successfully send a request", { id: toastId });
    } catch (error) {
      toast.error("Somthing wrong your polish request", { id: toastId });
    }
  };
  return (
    <>
      <Button
        className="bg-[#00abf0] px-5  font-semibold hover:bg-[#081b29] hover:text-white"
        onClick={showModal}
      >
        Request to Polish
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <SHForm
          onSubmit={onSubmit}
          defaultValues={defaultValue}
          // resolver={zodResolver(sellsValidationSchema)}
        >
          <SHInput type="text" name="status" label="status" />
          {/* <SHDatePicker name="date" label="Date" /> */}
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

export default ModalOfRequest;
