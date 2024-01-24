import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxGroup.css";

const Component = (props) => {
	const originClassName = "ux-group";
	const mixinClassName = classnames(originClassName, props.className, {field: props.field}, {valid: props.valid}, {invalid: props.invalid}, {readonly: props.readonly}, {disabled: props.disabled});

	const children = (children)=>{
		if (Array.isArray(children)) {
			return children;
		}
		else {
			return [children];
		}
	}

	const mergeProps = (children, object)=>{
		if (React.isValidElement(children)) {
			return React.cloneElement(children, object);
		}
	}

	return (
		<div className={mixinClassName}>
			{
				props.field &&
				children(props.children).map((element, index)=>{
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
				!props.field &&
				props.children
			}
		</div>
	);
};

export default Component;