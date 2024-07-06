import React from "react";
import classnames from "classnames";
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxFooter = (props, ref) => {
  const originClass = 'ux-footer';

  return (
    <footer className={classnames(originClass, props.className)}>
      <UxSection>
        <UxArticle>
          <UxContent>

          </UxContent>
        </UxArticle>
      </UxSection>
    </footer>
  )
};

export default React.forwardRef(UxFooter);