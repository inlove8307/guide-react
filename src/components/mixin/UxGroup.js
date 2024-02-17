import React, { useState } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxGroup.css";
import { slotArray, mergeProps } from "utils/core";

const UxGroup = (props) => {
	const originClassName = "ux-group";
	const mixinClassName = classnames(originClassName, props.className, {
		field: props.field,
		dash: props.dash,
		radio: props.radio,
		checkbox: props.checkbox,
		valid: props.valid,
		invalid: props.invalid,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [selected, setSelected] = useState(props.selected);

	const getProps = (index) => {
		if (props.field) {
			return {
				key: index,
				valid: props.valid,
				invalid: props.invalid,
				readonly: props.readonly,
				disabled: props.disabled,
				onChange: handleFieldChange
			}
		}

		if (props.checkbox) {
			return {
				key: index,
				disabled: props.disabled,
				onChange: handleCheckboxChange
			}
		}

		if (props.radio) {
			return {
				key: index,
				name: props.name,
				selected: selected,
				disabled: props.disabled,
				onChange: handleRadioChange
			}
		}
	}

	const handleFieldChange = (event) => {
		props.onChange && props.onChange(event);
	}

	const handleCheckboxChange = (event) => {
		props.onChange && props.onChange(event);
	}

	const handleRadioChange = (event) => {
		setSelected(event.target.value);
		props.onChange && props.onChange(event);
	}

	return (
		<div className={mixinClassName}>
			{
				(props.field || props.radio || props.checkbox) &&
				slotArray(props.children).map((element, index) => {
					return mergeProps(element, getProps(index));
				})
			}
			{!props.field && !props.radio && !props.checkbox && props.children}
		</div>
	);
};

export default UxGroup;