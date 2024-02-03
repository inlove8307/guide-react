import React, { useState, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxTextarea.css";

const UxTextarea = (props) => {
	const originClassName = "ux-textarea";
	const mixinClassName = classnames(originClassName, props.className, {
		valid: props.valid,
		invalid: props.invalid,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const inputRef = useRef();
	const [count, setCount] = useState(props.value?.length || 0);

	const handleChange = (event) => {
		if (props.fluid) {
			inputRef.current.style.height = "auto";
			inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
		}
		setCount(event.target.value.length);
		props.onChange && props.onChange(event);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	};
	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	};
	const handleKeyUp = (event) => {
		props.onKeyUp && props.onKeyUp(event);
	};
	const handleKeyDown = (event) => {
		props.onKeyDown && props.onKeyDown(event);
	};

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<textarea
					ref={inputRef}
					className={`${originClassName}-input`}
					placeholder={props.placeholder}
					value={props.value}
					rows={1}
					maxLength={props.maxLength}
					readOnly={props.readonly}
					disabled={props.disabled}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyUp={handleKeyUp}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<span className={`${originClassName}-count`}>{count}/{props.maxLength}</span>
		</div>
	);
};

export default UxTextarea;