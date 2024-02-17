import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxCollapse.css";
import { slotArray } from "utils/core";
import UxIcon from "components/base/UxIcon";

const UxCollapse = (props) => {
	const originClassName = "ux-collapse";
	const mixinClassName = classnames(originClassName, props.className);
	const array = (() => {
		let array = [];

		slotArray(props.children).map((item, index) => {
			let object = {};

			object["expanded"] = item.props["data-expanded"];

			item.props.children.map((item, index) => {
				object[item.props["data-role"]] = item.props.children;

				if (item.props.onClick) {
					object["onClick"] = item.props.onClick;
				}
			});

			array.push(object);
		});

		return array;
	})();
	const [data, setData] = useState(array);
	const collapse = useRef([]);

	const setExpanded = (index) => {
		const clone = [...data];

		if (props.once) {
			clone.map((item, cloneIndex) => {
				item.expanded = (index === cloneIndex)
					? !item.expanded
					: false;
			});
		}
		else {
			clone[index].expanded = !clone[index].expanded;
		}

		setData(clone);
	};

	const setCollapse = () => {
		data.map((item, index) => {
			const element = collapse.current[index];

			if (item.expanded) {
				element.style.maxHeight = `${element.scrollHeight}px`;
			}
			else {
				element.style.maxHeight = `${element.clientHeight}px`;

				setTimeout(() => {
					element.style.maxHeight = 0;
				}, 1);
			}
		});
	};

	const handleClick = (event, index) => {
		setExpanded(index);
		setCollapse(index);
		data[index].onClick && data[index].onClick(event, index);
		props.onClick && props.onClick(event, index);
	};

	const handleTransitionEnd = (element, index, event) => {
		if (data[index].expanded) {
			element.style.maxHeight = "initial";
		}
	};

	useEffect(() => {
		setTimeout(() => {
			data.map((item, index) => {
				const element = collapse.current[index];
				element.addEventListener("transitionend", handleTransitionEnd.bind(this, element, index));
			});

			setCollapse();
		}, 1);
	}, []);

	return (
		<div className={mixinClassName}>
			{
				data.map((item, index) => {
					return (
						<div
							key={index}
							className={classnames(`${originClassName}-base`, {expanded: item.expanded})}
						>
							<button
								type="button"
								className={`${originClassName}-button`}
								onClick={(event) => handleClick(event, index)}
							>
								{item.button}
								<UxIcon
									className={`${originClassName}-icon`}
									icon={item.expanded ? "angle-up" : "angle-down"}
								/>
							</button>
							<div
								ref={(element) => {collapse.current.push(element)}}
								className={`${originClassName}-panel`}
							>
								<div className={`${originClassName}-article`}>
									{item.content}
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	);
};

export default UxCollapse;