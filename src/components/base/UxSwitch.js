import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxSwitch.css";

const UxSwitch = (props) => {
	const originClassName = "ux-switch";
	const mixinClassName = classnames(originClassName, props.className);
	const [checked, setChecked] = useState(props.checked || false);

	const handleChange = (event) => {
		setChecked(!checked);
		props.onChange && props.onChange(event);
	};

	return (
		<div className={classnames(mixinClassName, {active: checked})}>
			{props.labelLeft && props.labelLeft}
			<label className={`${originClassName}-base`}>
				<span className={`${originClassName}-track`}>
					<span className={`${originClassName}-slide`} />
				</span>
				<input
					type="checkbox"
					className={`${originClassName}-input`}
					defaultChecked={checked}
					onChange={handleChange}
				/>
				{}
			</label>
			{props.labelRight && props.labelRight}
		</div>
	);
};

export default UxSwitch;