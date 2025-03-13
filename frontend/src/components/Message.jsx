import { Alert } from "antd";

const Message = ({ type, message }) => {
  return (
  <Alert type={type} message={message}></Alert>);
};

Message.defaultProps = {
  type: "info",
};

export default Message;
