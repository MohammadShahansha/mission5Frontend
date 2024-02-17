import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import {
  useDeleteShoesMutation,
  useGetAllShoesQuery,
} from "../../redux/features/shoesManagement/shoesManagementApi";
import { TShoesData } from "../../types/shoesData";
import DeleteIcons from "../../icons/DeleteIcons";
import EditIcon from "../../icons/EditIcon";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";

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
  const [deleteShoe] = useDeleteShoesMutation();
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
  const handleDelete: SubmitErrorHandler<FieldValues> = async (value) => {
    // console.log(value);
    await deleteShoe(value);
    toast.success("delete successfully");
  };

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
            <Button className="bg-blue-600 w-10 h-7 pr-2">
              <EditIcon />
            </Button>
          </Link>

          {/* delete button */}
          <Button
            className="bg-red-600 w-10 h-7 pr-2"
            onClick={() => handleDelete(items)}
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
