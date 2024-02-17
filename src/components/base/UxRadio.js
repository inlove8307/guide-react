import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxRadio.css";
import UxIcon from "components/base/UxIcon";

const UxRadio = (props) => {
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
				<UxIcon
					className={`${originClassName}-icon`}
					icon={isChecked ? "selected-circle" : "unselected-circle"}
				/>
				<span className={`${originClassName}-label`}>{props.label}</span>
			</label>
		</div>
	);
};

export default UxRadio;