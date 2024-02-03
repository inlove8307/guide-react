import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxTimeline.css";

const UxTimeline = (props) => {
	const originClassName = "ux-timeline";
	const mixinClassName = classnames(originClassName, props.className, {number: props.number});
	let timelineArray = [];

	if (Array.isArray(props.children)) {
		timelineArray = props.children;
	}
	else {
		timelineArray.push(props.children);
	}

	return (
		<div className={mixinClassName}>
			{
				timelineArray && timelineArray.length &&
				<ul className={`${originClassName}-base`}>
					{
						timelineArray.map((content, index)=>(
							<li
								key={index}
								className={`${originClassName}-item`}
							>
								<span className={`${originClassName}-index`}>{index + 1}</span>
								<div className={`${originClassName}-content`}>{content}</div>
							</li>
						))
					}
				</ul>
			}
		</div>
	);
};

export default UxTimeline;