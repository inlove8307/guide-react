import React, { useState, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxPassword.css";
import UxMasking from "components/mixin/UxMasking";
import UxButton from "components/base/UxButton";
import UxIcon from "components/base/UxIcon";

const UxPassword = (props) => {
	const originClassName = "ux-password";
	const mixinClassName = classnames(originClassName, props.className, {
		valid: props.valid,
		invalid: props.invalid,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [password, setPassword] = useState(props.value);
	const maskRef = useRef();

	const handleChange = (event) => {
		setPassword(event.target.value);
		props.onChange && props.onChange(event);
	}

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	}

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	}

	const handleKeyDown = (event) => {
		props.onKeyDown && props.onKeyDown(event);
	};

	const handleKeyUp = (event) => {
		props.onKeyUp && props.onKeyUp(event);
	};

	const handleClear = (event) => {
		maskRef.current.value = "";
		setPassword(maskRef.current.value);
	};

	return (
		<div className={mixinClassName}>
			<UxMasking
				ref={maskRef}
				value={password}
				mask={props.mask}
				hasFocus={(props.readonly || props.disabled) ? false : true}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
			/>
			{
				props.clear && password && !props.readonly && !props.disabled &&
				<UxButton
					className={`${originClassName}-clear`}
					icon={<UxIcon icon="clear" />}
					onClick={handleClear}
				/>
			}
		</div>
	);
};

export default UxPassword;