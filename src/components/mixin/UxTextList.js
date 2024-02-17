import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxTextList.css";
import { slotArray } from "utils/core";
//MIXIN
import UxText from "components/base/UxText";

const UxTextList = (props) => {
	const originClassName = "ux-text-list";
	const mixinClassName = classnames(originClassName, props.className);
	const data = props.data || slotArray(props.children);

	return (
		<div className={mixinClassName}>
			<ul className={`${originClassName}-base`}>
				{
					data.map((item, index)=>(
					<li
						key={index}
						className={`${originClassName}-item`}
					>
						{
							props.data &&
							<UxText
								className={classnames(props.size)}
								prefix={
									props.prefix === "number"
									? `${index + 1}.`
									: props.prefix
								}
								bullet={props.bullet}
							>
								{item}
							</UxText>
						}
						{!props.data && item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UxTextList;