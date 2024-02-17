import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import {
  useGetAllShoesQuery,
  useUpdateShoesMutation,
} from "../../redux/features/shoesManagement/shoesManagementApi";
import { TShoesData } from "../../types/shoesData";
import DeleteIcons from "../../icons/deleteIcons";
import EditIcon from "../../icons/EditIcon";
import { Link } from "react-router-dom";

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
  // const [toUpdateDataSendId] = useUpdateShoesMutation();
  // console.log(shoesData);
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

  // const handleUpdate = (data) => {
  //   const updateData = {
  //     _id: data._id,
  //     data: data,
  //   };
  //   console.log(updateData._id);
  //   toUpdateDataSendId(updateData);
  // };
  const handleDelete = (value) => {};

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
      key: "name",
      dataIndex: "name",
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
      title: "Release Date",
      key: "date",
      dataIndex: "releaseDate",
    },
    {
      title: "Action",
      key: "action",
      render: (items) => (
        <Space size="middle">
          {/* update Button */}
          <Link
            to={{
              pathname: "/user/update-shoes",
            }}
            state={{ shoesData: items }}
          >
            <Button
              className="bg-blue-600 w-10 h-7 pr-2"
              // onClick={() => handleUpdate(items)}
            >
              <EditIcon />
            </Button>
          </Link>

          {/* delete button */}
          <Button
            className="bg-red-600 w-10 h-7 pr-2"
            onClick={() => handleDelete(record)}
          >
            <DeleteIcons />
          </Button>
        </Space>
      ),
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
