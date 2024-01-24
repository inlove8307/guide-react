import React, { useRef, useState } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxInput.css";
import UxButton from "components/base/UxButton";

const Component = (props) => {
	const originClassName = "ux-input";
	const mixinClassName = classnames(originClassName, props.className, props.align, {valid: props.valid}, {invalid: props.invalid}, {readonly: props.readonly}, {disabled: props.disabled});
	const inputRef = useRef(null);
	const [value, setValue] = useState(props.value || "");

	const handleChange = (event)=>{
		props.onChange && props.onChange(event);
		setValue(inputRef.current.value);
	};

	const handleFocus = (event)=>{
		props.onFocus && props.onFocus(event);
	};

	const handleBlur = (event)=>{
		props.onBlur && props.onBlur(event);
	};

	const handleKeyDown = (event)=>{
		props.onKeyDown && props.onKeyDown(event);
	};

	const handleKeyUp = (event)=>{
		props.onKeyUp && props.onKeyUp(event);
	};

	const handleClear = (event)=>{
		inputRef.current.value = "";
		setValue(inputRef.current.value);
		props.onClear && props.onClear(event);
	};

	const handleIcon = (event)=>{
		props.handleIcon && props.handleIcon(event);
	};

	const handleSubmit = (event)=>{
		props.onSubmit && props.onSubmit(event);
	};

	return (
		<div
			className={mixinClassName}
			style={props.size && { flexBasis: `${props.size}px` }}
		>
			{
				props.prefix &&
				<span className={`${originClassName}-prefix`}>{props.prefix}</span>
			}
			<input
				ref={inputRef}
				type={props.type || "text"}
				className={`${originClassName}-base`}
				defaultValue={value}
				placeholder={props.placeholder}
				readOnly={props.readonly}
				disabled={props.disabled}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
			/>
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxButton
					className={`${originClassName}-clear`}
					icon="ux-icon-clear"
					onClick={handleClear}
				/>
			}
			{
				props.suffix &&
				<span className={`${originClassName}-suffix`}>{props.suffix}</span>
			}
			{
				props.timer &&
				<span className={`${originClassName}-timer`}>{props.timer}</span>
			}
			{
				props.icon && !props.readonly && !props.disabled &&
				<UxButton
					className={`${originClassName}-icon`}
					icon={props.icon}
					onClick={handleIcon}
				/>
			}
			{
				props.button && !props.readonly && !props.disabled &&
				<UxButton
					className={`${originClassName}-submit`}
					label={props.button}
					onClick={handleSubmit}
				/>
			}
		</div>
	);
};

export default Component;