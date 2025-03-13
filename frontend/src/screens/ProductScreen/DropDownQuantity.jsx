import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";
const items = [
  {
    key: "1",
    label: (
      <a rel="noopener noreferrer" href="https://www.antgroup.com">
        1st item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd item
      </a>
    ),
  },
];
const DropDownQuantity = (productId) => {
    const {
        data: product,
        isLoading,
        error,
      } = useGetProductDetailsQuery(productId);
    //   items =     {[...Array(product.countInStock).keys()].map((x) => (
    //     <option key={x + 1} value={x + 1}>
    //       {x + 1}
    //     </option>
    //   ))}
      return(
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Sort By
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>)
};
export default DropDownQuantity;
