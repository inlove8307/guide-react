import React, { useState } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxCheckbox.css";
import UxIcon from "components/base/UxIcon";

const UxCheckbox = (props) => {
	const originClassName = "ux-checkbox";
	const mixinClassName = classnames(originClassName, props.className, {disabled: props.disabled});
	const [isChecked, setIsChecked] = useState(props.checked || false);

	const handleChange = (event) => {
		setIsChecked(event.target.checked);
		props.onChange && props.onChange(event);
	};

	return (
		<div className={mixinClassName}>
			<label className={`${originClassName}-base`}>
				<input
					type="checkbox"
					className={`${originClassName}-input`}
					defaultChecked={props.checked}
					onChange={handleChange}
					disabled={props.disabled}
				/>
				<UxIcon
					className={`${originClassName}-icon`}
					icon={isChecked ? "checked-circle" : "unchecked-circle"}
				/>
				<span className={`${originClassName}-label`}>{props.label}</span>
			</label>
		</div>
	);
};

export default UxCheckbox;