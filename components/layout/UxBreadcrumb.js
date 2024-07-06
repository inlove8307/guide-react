import React from "react";
import classnames from "classnames";
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxBreadcrumb = (props, ref) => {
  const originClass = 'ux-breadcrumb';

  return (
    <UxSection className={classnames(originClass, props.className)}>
      <UxArticle>
        <UxContent>

        </UxContent>
      </UxArticle>
    </UxSection>
  )
};

export default React.forwardRef(UxBreadcrumb);