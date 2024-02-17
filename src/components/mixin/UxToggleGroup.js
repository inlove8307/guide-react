import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxToggleGroup.css";
import { slotArray, mergeProps } from "utils/core";

const UxToggleGroup = (props) => {
	const originClassName = "ux-toggle-group";
	const mixinClassName = classnames(originClassName, props.className);
	const [selected, setSelected] = useState(props.selected || 0);

	const handleClick = (index) => {
		setSelected(index);
	};

	useEffect(() => {
		props.onChange && props.onChange(selected);
	}, [selected]);

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				{
					slotArray(props.children).map((item, index) => {
						const isToggle = selected === index ? true : false;
						return mergeProps(item, {
							key: index,
							isGroup: true,
							isToggle,
							onClick: () => handleClick(index)
						});
					})
				}
			</div>
		</div>
	);
};

export default UxToggleGroup;