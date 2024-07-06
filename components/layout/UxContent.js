import React from "react";
import classnames from "classnames";

const UxContent = (props, ref) => {
  const originClass = 'ux-content';

  return (
    <div className={classnames(originClass, props.className)}>
      {props.children}
    </div>
  )
};

export default React.forwardRef(UxContent);