import { Icon } from "@iconify/react";
import React from "react";

const AlertMessageNotP = ({
  classContaint,
  children,
  onCloseHandler,
  classIcon
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
    </div>
  );
};

export default AlertMessageNotP;
