// import { useState } from "react";
// import { Button, Modal } from "antd";

// type TProps = {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   title: string;
//   children: React.ReactNode;
// };

// const ReUseableModal = ({ open, setOpen, title, children }: TProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   //   const showModal = () => {
//   //     setIsModalOpen(true);
//   //   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {/* <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//        */}
//       <Modal
//         title="Basic Modal"
//         open={open}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };

// export default ReUseableModal;
