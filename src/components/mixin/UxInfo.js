import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxInfo.css";
//MIXIN
import UxGroup from "components/mixin/UxGroup";

const UxInfo = (props) => {
	const originClassName = "ux-info";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{
				props.data && props.data.length &&
				props.data.map((item, index)=>(
					<UxGroup
						key={index}
						className={`${originClassName}-item flex`}
					>
						<span className={`${originClassName}-label`}>{item.label}</span>
						<span className={`${originClassName}-label right`}>{item.value}</span>
					</UxGroup>
				))
			}
			{!props.data && props.children}
		</div>
	);
};

export default UxInfo;