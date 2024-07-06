import React from "react";
import classnames from "classnames";

const UxSection = (props, ref) => {
  const originClass = 'ux-section';

  return (
    <section className={classnames(originClass, props.className)}>
      {props.children}
    </section>
  )
};

export default React.forwardRef(UxSection);