import React from "react";
import classnames from "classnames";
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxAside = (props, ref) => {
  const originClass = 'ux-aside';

  return (
    <aside className={classnames(originClass, props.className)}>
      <UxSection>
        <UxArticle>
          <UxContent>

          </UxContent>
        </UxArticle>
      </UxSection>
    </aside>
  )
};

export default React.forwardRef(UxAside);