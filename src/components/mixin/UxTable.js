import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxTable.css";

const UxTable = (props) => {
	const originClassName = "ux-table";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			<table className={`${originClassName}-base`}>
				{props.children}
			</table>
		</div>
	);
};

export default UxTable;