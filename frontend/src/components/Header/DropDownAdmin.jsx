import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
        <a  rel="noopener noreferrer"  href="/admin/shop/productlist">
        Products
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a  rel="noopener noreferrer" href="/admin/shop/orderlist">
      Orders
      </a>
    ),
    // icon: <SmileOutlined />,
    // disabled: true,
  },
  {
    key: '3',
    label: (
      <a  rel="noopener noreferrer" href="/admin/shop/userlist">
       Users
      </a>
    ),
  },
];
const DropDownAdmin = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Admin
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDownAdmin;