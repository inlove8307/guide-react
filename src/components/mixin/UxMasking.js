import React, { useState } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxMasking.css";

const Component = (props) => {
	const originClassName = "ux-masking";
	const mixinClassName = classnames(originClassName, props.className);
	const [value, setValue] = useState(props.value || "");

	const ComponentMask = (props)=>{
		const masks = (()=>{
			let array = [];

			while (array.length < Number(props.mask)) {
				array.length < value.length
				? array.push(true)
				: array.push(false);
			}

			return array;
		})();

		return (
			<div className={`${originClassName}-mask`}>
				{masks.map((enabled, index)=>(
					<span
						key={index}
						className={classnames(`${originClassName}-item`, {enabled: enabled})}
					/>
				))}
			</div>
		);
	}

	const handleChange = (event)=>{
		setValue(event.target.value);
		props.onChange && props.onChange(event);
	}

	const handleFocus = (event)=>{
		props.onFocus && props.onFocus(event);
	}

	const handleBlur = (event)=>{
		props.onBlur && props.onBlur(event);
	}

	return (
		<div className={mixinClassName}>
			<ComponentMask {...props} />
			<input
				type="text"
				className={`${originClassName}-input`}
				value={value}
				maxLength={props.mask}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</div>
	);
};

export default Component;