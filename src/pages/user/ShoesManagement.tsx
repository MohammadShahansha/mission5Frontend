import {
  Button,
  Checkbox,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import {
  useDeleteShoesMutation,
  useGetAllShoesQuery,
  useMultipleShoesDeleteMutation,
} from "../../redux/features/shoesManagement/shoesManagementApi";
import { TQueryParam, TShoesData } from "../../types/shoesData";
import DeleteIcons from "../../icons/DeleteIcons";
import EditIcon from "../../icons/EditIcon";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { useState } from "react";
export type TTableData = Pick<
  TShoesData,
  | "brand"
  | "color"
  | "model"
  | "name"
  | "id"
  | "price"
  | "quantity"
  | "releaseDate"
  | "shoesImage"
  | "size"
  | "style"
>;

const ShoesManagement = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const {
    data: shoesData,
    isLoading,
    isFetching,
  } = useGetAllShoesQuery(params);
  const [deleteShoe] = useDeleteShoesMutation();
  const [deleteMultipleShoe] = useMultipleShoesDeleteMutation();
  const tableData = shoesData?.data?.map(
    ({
      brand,
      color,
      model,
      name,
      id,
      price,
      quantity,
      releaseDate,
      size,
      style,
      shoesImage,
      _id,
    }) => {
      return {
        brand,
        color,
        model,
        name,
        id,
        price,
        quantity,
        releaseDate,
        size,
        style,
        shoesImage,
        key: _id,
      };
    }
  );
  console.log(tableData);
  const handleDelete: SubmitErrorHandler<FieldValues> = async (value) => {
    console.log(value);
    await deleteShoe(value);
    toast.success("delete successfully");
  };

  const selectItem = (selectedKeys: React.Key[]) => {
    console.log(selectedKeys);
    setSelectedRowKeys(selectedKeys as string[]);
  };

  const handleMultipleDelete = async () => {
    console.log(selectedRowKeys);
    await deleteMultipleShoe(selectedRowKeys);
    toast.success("Delete all successful");
    // Clear the selection
    setSelectedRowKeys([]);
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Select",
      key: "select",
      dataIndex: "key",
      render: (key) => (
        <Checkbox
          value={key}
          onChange={(e) =>
            selectItem(e.target.checked ? [...selectedRowKeys, key] : [])
          }
        />
      ),
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [...new Set(tableData?.map((item) => item.name))].map(
        (name) => ({
          text: name,
          value: name,
        })
      ),
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      filters: [...new Set(tableData?.map((item) => item.price))]
        .sort((a, b) => a - b)
        .map((name) => ({
          text: name,
          value: name,
        })),
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Brand",
      key: "brand",
      dataIndex: "brand",
      filters: [...new Set(tableData?.map((item) => item.brand))].map(
        (brand) => ({
          text: brand,
          value: brand,
        })
      ),
    },
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Size",
      key: "size",
      dataIndex: "size",
      filters: [...new Set(tableData?.map((item) => item.size))].map(
        (size) => ({
          text: size,
          value: size,
        })
      ),
    },
    {
      title: "Model",
      key: "model",
      dataIndex: "model",
      filters: [...new Set(tableData?.map((item) => item.model))].map(
        (model) => ({
          text: model,
          value: model,
        })
      ),
    },
    {
      title: "Style",
      key: "style",
      dataIndex: "style",
      filters: [...new Set(tableData?.map((item) => item.style))].map(
        (style) => ({
          text: style,
          value: style,
        })
      ),
    },
    {
      title: "Color",
      key: "color",
      dataIndex: "color",
      filters: [...new Set(tableData?.map((item) => item.color))].map(
        (color) => ({
          text: color,
          value: color,
        })
      ),
    },
    {
      title: "Release Date",
      key: "date",
      dataIndex: "releaseDate",
      filters: [...new Set(tableData?.map((item) => item.releaseDate))].map(
        (releaseDate) => ({
          text: releaseDate,
          value: releaseDate,
        })
      ),
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
            <Button className="flex items-center bg-[#00abf0] font-semibold hover:bg-[#081b29] hover:text-white">
              <EditIcon />
            </Button>
          </Link>

          {/* delete button */}
          <Button
            className="bg-red-600 flex items-center hover:bg-red-800 "
            onClick={() => handleDelete(items)}
          >
            <DeleteIcons />
          </Button>
          <Link
            to={{
              pathname: "/user/duplicate-shoes",
            }}
            state={{ shoesData: items }}
          >
            <Button className=" flex items-center bg-[#00abf0] font-semibold hover:bg-[#081b29] hover:text-white">
              Duplicate & Edit
            </Button>
          </Link>
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
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.price?.forEach((item) =>
        queryParams.push({ name: "price", value: item })
      );
      filters.brand?.forEach((item) =>
        queryParams.push({ name: "brand", value: item })
      );
      filters.size?.forEach((item) =>
        queryParams.push({ name: "size", value: item })
      );
      filters.model?.forEach((item) =>
        queryParams.push({ name: "model", value: item })
      );
      filters.style?.forEach((item) =>
        queryParams.push({ name: "style", value: item })
      );
      filters.color?.forEach((item) =>
        queryParams.push({ name: "color", value: item })
      );
      filters.releaseDate?.forEach((item) =>
        queryParams.push({ name: "releaseDate", value: item })
      );
      // console.log(queryParams);
      setParams(queryParams);
    }
    if (isLoading) {
      return <p>loading</p>;
    }
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Button
        onClick={handleMultipleDelete}
        disabled={selectedRowKeys.length === 0}
      >
        Delete selected item
      </Button>
      <Table
        loading={isFetching}
        // rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
    </>
  );
};

export default ShoesManagement;
// User.deleteMany(
//   {
//       age: { $gte: 15 }
//   }).then(
//       function () {
//           // Success
//           console.log("Data deleted");
//       }).catch(
//           function (error) {
//               // Failure
//               console.log(error);
//           });
