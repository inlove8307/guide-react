import React from "react";
import classnames from "classnames";
import Link from 'next/link'
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";

const UxHeader = (props, ref) => {
  const originClass = 'ux-header';

  return (
    <header className={classnames(originClass, props.className)}>
      <UxSection>
        <UxArticle>
          <UxContent>
            <Link href="/view/Main">Main</Link>
            <Link href="/view/Sample">Sample</Link>
          </UxContent>
        </UxArticle>
      </UxSection>
    </header>
  )
};

export default React.forwardRef(UxHeader);