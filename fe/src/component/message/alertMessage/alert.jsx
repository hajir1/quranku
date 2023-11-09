import { Icon } from "@iconify/react";
import React from "react";

const AlertMessage = ({
  classContaint,
  children,
  onCloseHandler,
  classIcon,
  onNotHandler,
  onYesHandler,
}) => {
  return (
    <div className={`${classContaint}`}>
      <div className="w-full">
        <Icon
          onClick={onCloseHandler}
          className={classIcon}
          icon="octicon:x-12"
        />
      </div>
      {children}
      <div className="text-white flex justify-around mt-1 w-full">
        <button onClick={onYesHandler} className="text-sm w-1/2">
          ya
        </button>
        <button onClick={onNotHandler} className="text-sm w-1/2">
          tidak
        </button>
      </div>
    </div>
  );
};

export default AlertMessage;
