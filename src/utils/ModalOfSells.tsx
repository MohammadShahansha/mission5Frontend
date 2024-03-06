import { useState } from "react";
import { Button, Modal } from "antd";
import SHForm from "../components/form/SHForm";
import SHInput from "../components/form/SHInput";
import { TShoesData } from "../types/shoesData";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SHDatePicker from "../components/form/SHDatePicker";
import { useCreateSellsHistoryMutation } from "../redux/features/shoesManagement/sellsManagementApi";
import { toast } from "sonner";
import {
  useGetAllShoesQuery,
  useUpdateShoesMutation,
} from "@/redux/features/shoesManagement/shoesManagementApi";

const ModalOfSells = (shoe: TShoesData) => {
  const [sellsProduct] = useCreateSellsHistoryMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toUpdateQuantity] = useUpdateShoesMutation();
  const { refetch: refetchShoesData } = useGetAllShoesQuery(undefined);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Product is selling........");
    const sellProduct = {
      quantity: Number(data.quantity),
      buyer: data.buyer,
      date: data.date,
      shoes: shoe._id,
    };
    try {
      await sellsProduct(sellProduct);
      toast.success("Successfully selled", { id: toastId });
    } catch (error) {
      toast.error("Somthing wrong your sell system", { id: toastId });
    }
    const updateQuantity = {
      quantity: shoe.quantity - sellProduct.quantity,
      _id: shoe._id,
    };
    console.log(updateQuantity);
    try {
      await toUpdateQuantity(updateQuantity);
      refetchShoesData();
    } catch (erre) {
      toast.error("Somthing error when quantity updated from modal of sell");
    }
  };
  return (
    <>
      <Button
        className="bg-[#00abf0] px-5 w-20 font-semibold hover:bg-[#081b29] hover:text-white"
        onClick={showModal}
      >
        Sell
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <SHForm
          onSubmit={onSubmit}
          // resolver={zodResolver(sellsValidationSchema)}
        >
          <SHInput type="text" name="quantity" label="Quantity" />
          <SHInput type="text" name="buyer" label="Buyer Name" />
          <SHDatePicker name="date" label="Date" />
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

export default ModalOfSells;
