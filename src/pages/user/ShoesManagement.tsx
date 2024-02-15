import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllShoesQuery } from "../../redux/features/shoesManagement/shoesManagementApi";
import { TShoesData } from "../../types/shoesData";

export type TTableData = Pick<
  TShoesData,
  | "brand"
  | "color"
  | "model"
  | "name"
  | "price"
  | "quantity"
  | "releaseDate"
  | "shoesImage"
  | "size"
  | "style"
>;
const ShoesManagement = () => {
  const { data: shoesData } = useGetAllShoesQuery(undefined);
  console.log(shoesData);
  const tableData = shoesData?.data?.map(
    ({
      brand,
      color,
      model,
      name,
      price,
      quantity,
      releaseDate,
      size,
      style,
      shoesImage,
      _id,
    }) => ({
      brand,
      color,
      model,
      name,
      price,
      quantity,
      releaseDate,
      size,
      style,
      shoesImage,
      _id,
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
          style={{ width: "50px", borderRadius: "50%" }}
        />
      ),
      // filters: [
      //   {
      //     text: "Joe",
      //     value: "Joe",
      //   },
      //   {
      //     text: "Jim",
      //     value: "Jim",
      //   },
      //   {
      //     text: "Submenu",
      //     value: "Submenu",
      //     children: [
      //       {
      //         text: "Green",
      //         value: "Green",
      //       },
      //       {
      //         text: "Black",
      //         value: "Black",
      //       },
      //     ],
      //   },
      // ],
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
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
  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default ShoesManagement;
