import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxCollapse.css";
import { arrayChild } from "utils/core";

const Component = (props) => {
	const originClassName = "ux-collapse";
	const mixinClassName = classnames(originClassName, props.className);
	const array = (() => {
		let array = [];

		arrayChild(props.children).map((item, index) => {
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

	const handleClick = (event, index) => {
		const array = [...data];
		array[index].expanded = !array[index].expanded;
		setData(array);
		setCollapse(index);
		data[index].onClick && data[index].onClick(event, index);
		props.onChange && props.onChange(event, index);
	};

	const setCollapse = (index) => {
		const element = collapse.current[index];

		if (element) {
			if (data[index].expanded) {
				element.style.maxHeight = `${element.scrollHeight}px`;
			}
			else {
				element.style.maxHeight = `${element.clientHeight}px`;
				setTimeout(() => {
					element.style.maxHeight = 0;
				}, 1);
			}
		}
	}

	const handleTransitionEnd = (element, index) => {
		if (data[index].expanded) {
			element.style.maxHeight = "initial";
		}
	}

	useEffect(() => {
		setTimeout(() => {
			data.map((item, index) => {
				const element = collapse.current[index];
				setCollapse(index);
				element.addEventListener("transitionend", handleTransitionEnd.bind(this, element, index));
			});
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
								<span className={classnames(`${originClassName}-icon`, {
									"ux-icon-arrow-up": item.expanded,
									"ux-icon-arrow-down": !item.expanded
								})} />
							</button>
							<div
								ref={(element) => {collapse.current.push(element)}}
								className={`${originClassName}-section`}
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

export default Component;