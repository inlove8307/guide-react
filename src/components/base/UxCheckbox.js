import React, { useState } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxCheckbox.css";

const UxCheckbox = (props) => {
	const originClassName = "ux-checkbox";
	const mixinClassName = classnames(originClassName, props.className, {disabled: props.disabled});
	const [checked, setChecked] = useState(props.checked || false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
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
				<span
					className={classnames(`${originClassName}-icon`, {
						"ux-icon-checked-circle": checked,
						"ux-icon-unchecked-circle": !checked
					})}
				/>
				<span className={`${originClassName}-label`}>{props.label}</span>
			</label>
		</div>
	);
};

export default UxCheckbox;