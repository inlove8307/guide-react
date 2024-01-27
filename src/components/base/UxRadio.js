import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxRadio.css";

const Component = (props) => {
	const originClassName = "ux-radio";
	const mixinClassName = classnames(originClassName, props.className, {disabled: props.disabled});
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (event) => {
		props.onChange && props.onChange(event);
	};

	useEffect(()=>{
		setIsChecked(props.value === props.selected);
	}, [props.selected]);

	return (
		<div className={mixinClassName}>
			<label className={`${originClassName}-base`}>
				<input
					type="radio"
					className={`${originClassName}-input`}
					name={props.name}
					value={props.value}
					checked={props.value === props.selected}
					onChange={handleChange}
					disabled={props.disabled}
				/>
				<span
					className={classnames(`${originClassName}-icon`, {
						"ux-icon-selected-circle": isChecked,
						"ux-icon-unselected-circle": !isChecked
					})}
				/>
				<span className={`${originClassName}-label`}>{props.label}</span>
			</label>
		</div>
	);
};

export default Component;