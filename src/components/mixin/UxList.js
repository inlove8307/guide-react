import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxList.css";
//MIXIN
import UxText from "components/base/UxText";

const Component = (props) => {
	const originClassName = "ux-list";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{
				props.data && props.data.length &&
				<ul className={`${originClassName}-base`}>
					{
						props.data.map((item, index)=>(
						<li
							key={index}
							className={`${originClassName}-item`}
						>
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
						</li>
					))}
				</ul>
			}
			{!props.data && props.children}
		</div>
	);
};

export default Component;