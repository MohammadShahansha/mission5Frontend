import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSellsHistoryQuery } from "../../redux/features/shoesManagement/sellsManagementApi";
import { TSellsData } from "../../types/sellsData";
import DropdownFilter from "@/utils/DropdownFilter";
import { useState } from "react";

export type TTableData = Pick<
  TSellsData,
  "quantity" | "buyer" | "date" | "shoes" | "_id"
>;
const SalesHistory = () => {
  const [interval, setInterval] = useState("");
  console.log(interval);
  const { data: selsData } = useGetAllSellsHistoryQuery(interval);
  const tableData = selsData?.data?.map(
    ({ quantity, date, buyer, shoes, _id }: TSellsData) => ({
      quantity,
      date,
      buyer,
      brand: shoes?.brand,
      name: shoes?.name,
      shoesImage: shoes?.shoesImage,
      color: shoes?.color,
      price: shoes?.price,
      model: shoes?.model,
      size: shoes?.size,
      key: _id,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Image",
      dataIndex: "shoesImage",
      key: "shoesImage",
      render: (shoesImage) => (
        <img
          src={shoesImage}
          alt="Shoe"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      ),
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Buyer Name",
      key: "buyer",
      dataIndex: "buyer",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Brand",
      key: "brand",
      dataIndex: "brand",
    },
    {
      title: "Size",
      key: "size",
      dataIndex: "size",
    },
    {
      title: "Model",
      key: "model",
      dataIndex: "model",
    },
    {
      title: "Color",
      key: "color",
      dataIndex: "color",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Sells Date",
      key: "date",
      dataIndex: "date",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <DropdownFilter interval={interval} setInterval={setInterval} />
      <Table columns={columns} dataSource={tableData} onChange={onChange} />
    </>
  );
};

export default SalesHistory;
