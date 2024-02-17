import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxDatepicker.css";
import UxInput from "components/base/UxInput";

const UxDatepicker = (props) => {
	const originClassName = "ux-datepicker";
	const mixinClassName = classnames(originClassName, props.className);
	const [value, setValue] = useState();

	const handleChange = (event) => {
		const regexp = /^(\d{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/;
		if (event.target.value === "" || regexp.test(event.target.value)) {
			setValue(event.target.value);
		}
	};

	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<div className={mixinClassName}>
			<UxInput
				value={value}
				lower
				onChange={handleChange}
			/>
		</div>
	);
};

export default UxDatepicker;