import React from "react";
import classnames from "classnames";

const UxTitle = (props, ref) => {
  const originClass = 'ux-title';

  return (
    <div className={classnames(originClass, props.className)}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxTitle);