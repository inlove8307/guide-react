import React from "react";
import classnames from "classnames";

const UxArticle = (props, ref) => {
  const originClass = 'ux-article';

  return (
    <article className={classnames(originClass, props.className)}>
      {props.children}
    </article>
  )
};

export default React.forwardRef(UxArticle);