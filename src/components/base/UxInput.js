import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxInput.css";
import Cleave from "cleave.js/react";
import UxButton from "components/base/UxButton";
import UxIcon from "components/base/UxIcon";

const UxInput = (props) => {
	const originClassName = "ux-input";
	const mixinClassName = classnames(originClassName, props.className, props.align, {
		valid: props.valid,
		invalid: props.invalid,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const inputRef = useRef(null);
	const [value, setValue] = useState(props.value || "");

	const handleInput = (event) => {
		props.onInput && props.onInput(event);
	};

	const handleChange = (event) => {
		!props.pattern && setValue(event.target.value);
		props.onChange && props.onChange(event);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	};

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	};

	const handleKeyDown = (event) => {
		props.onKeyDown && props.onKeyDown(event);
	};

	const handleKeyUp = (event) => {
		props.onKeyUp && props.onKeyUp(event);
	};

	const handleClear = (event) => {
		inputRef.current.value = "";
		setValue(inputRef.current.value);
		props.onClear && props.onClear(event);
	};

	const handleSubmit = (event) => {
		props.onSubmit && props.onSubmit(event);
	};

	return (
		<div
			className={mixinClassName}
			style={{flexBasis: `${props.size}rem`}}
		>
			{
				props.prefix &&
				<span className={`${originClassName}-prefix`}>{props.prefix}</span>
			}
			{
				props.pattern &&
				<Cleave
					className={`${originClassName}-base`}
					value={props.value}
					options={props.pattern}
					placeholder={props.placeholder}
					readOnly={props.readonly}
					disabled={props.disabled}
					onInput={handleInput}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					onKeyUp={handleKeyUp}
				/>
			}
			{
				!props.pattern &&
				<input
					ref={inputRef}
					type={props.type || "text"}
					className={`${originClassName}-base`}
					value={value}
					placeholder={props.placeholder}
					readOnly={props.readonly}
					disabled={props.disabled}
					onInput={handleInput}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					onKeyUp={handleKeyUp}
				/>
			}
			{
				props.clear && value && !props.readonly && !props.disabled &&
				<UxButton
					className={`${originClassName}-clear`}
					icon={<UxIcon icon="clear" />}
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
			{props.icon && !props.readonly && !props.disabled && props.icon}
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

export default UxInput;