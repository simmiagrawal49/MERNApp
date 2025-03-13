import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";

const DropDownCollections = ({
  uniqueProductCollections,
  handleFilterByCollectionState,
}) => {
  const items = uniqueProductCollections?.map((productCollection, index) => ({
    key: index,
    label: (
      <Button
        type="text"
        onClick={() => {
          handleFilterByCollectionState(productCollection);
        }}
      >
        {productCollection}
      </Button>
    ),
  }));

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Button type="link" onClick={(e) => e.preventDefault()}>
        <Space>
          Collection
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};
export default DropDownCollections;
