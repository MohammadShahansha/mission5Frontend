import { useState } from "react";
import { Button, Modal } from "antd";
import SHForm from "../components/form/SHForm";
import SHInput from "../components/form/SHInput";
import { TShoesData } from "../types/shoesData";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SHDatePicker from "../components/form/SHDatePicker";

const ModalOfSells = (shoes: TShoesData) => {
  // console.log(shoe);
  // const shoeId = shoe._id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const sellProduct = {
      shoes,
      sellHistoy: data,
    };
    console.log(sellProduct);
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
        <SHForm onSubmit={onSubmit}>
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
