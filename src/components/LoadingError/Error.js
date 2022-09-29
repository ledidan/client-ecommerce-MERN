import React from "react";

const Message = ({ variant, chilren }) => {
  return <div className={`alert ${variant}`}>{chilren}</div>;
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
