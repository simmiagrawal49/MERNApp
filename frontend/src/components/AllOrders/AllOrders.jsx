import { Space, Table } from "antd";
import { useGetMyOrdersQuery } from "../../slices/orderApiSlice";

const AllOrders = () => {
  const { data: orders } = useGetMyOrdersQuery();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
    },
    {
      title: "Delivered",
      dataIndex: "delivered",
      key: "delivered",
    },
    {
      title: "Details",
      key: "details",
      render: (_, record) => (
        <Space size="middle">
          <a href={`/shop/order/${record.id}`}>Details</a>
        </Space>
      ),
    },
  ];
  const paidOrders = orders.filter((order) => order.isPaid === true);
  const ordersData = paidOrders.map((order) => ({
    key: order._id,
    id: order._id,
    date: order.createdAt?.substring(0, 10),
    total: order.totalPrice,
    paid: order.paidAt?.substring(0, 10) || "Unpaid",
    delivered: order.deliveredAt?.substring(0, 10) || "UnDelivered",
  }));
  return <Table columns={columns} dataSource={ordersData} />;
};
export default AllOrders;
