import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";

const DropDownSort = ({ handleSortByState }) => {
  const items = [
    {
      key: "1",
      label: (
        <Button
          type="text"
          onClick={() => {
            handleSortByState("featured");
          }}
        >
          Featured
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="text"
          onClick={() => {
            handleSortByState("priceHighToLow");
          }}
        >
          Price High to Low
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          type="text"
          onClick={() => {
            handleSortByState("priceLowToHigh");
          }}
        >
          Price Low to High
        </Button>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Button type="link" onClick={(e) => e.preventDefault()}>
          Sort By
          <DownOutlined />
      </Button>
    </Dropdown>
  );
};
export default DropDownSort;
