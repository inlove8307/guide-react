import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxField.css";

const UxField = (props) => {
	const originClassName = "ux-field";
	const mixinClassName = classnames(originClassName, props.className, props.align, {
		valid: props.valid,
		invalid: props.invalid,
		readonly: props.readonly,
		disabled: props.disabled
	});

	const children = (children) => {
		if (Array.isArray(children)) {
			return children;
		}
		else {
			return [children];
		}
	}

	const mergeProps = (children, object) => {
		if (React.isValidElement(children)) {
			return React.cloneElement(children, object);
		}
	}

	return (
		<div
			className={mixinClassName}
			readOnly={props.readonly}
			disabled={props.disabled}
		>
			{
				props.label &&
				<p className={`${originClassName}-label`}>{props.label}</p>
			}
			{
				children(props.children).map((element, index) => {
					return mergeProps(element, {
						key: index,
						valid: props.valid,
						invalid: props.invalid,
						readonly: props.readonly,
						disabled: props.disabled
					});
				})
			}
			{
				props.message &&
				<p className={`${originClassName}-message`}>{props.message}</p>
			}
			{
				props.result && (props.valid || props.invalid) &&
				<p className={`${originClassName}-result`}>{props.result}</p>
			}
		</div>
	);
};

export default UxField;