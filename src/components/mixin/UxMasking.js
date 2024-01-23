import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxMasking.css";

const Component = ({...props}, ref) => {
	const originClassName = "ux-masking";
	const mixinClassName = classnames(originClassName, props.className);

	const ComponentMask = (props)=>{
		const masks = (()=>{
			let array = [];

			while (array.length < Number(props.mask)) {
				array.length < props.value?.length
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
		props.onChange && props.onChange(event);
	}

	const handleFocus = (event)=>{
		props.onFocus && props.onFocus(event);
	}

	const handleBlur = (event)=>{
		props.onBlur && props.onBlur(event);
	}

	const handleKeyDown = (event)=>{
		props.onKeyDown && props.onKeyDown(event);
	};

	const handleKeyUp = (event)=>{
		props.onKeyUp && props.onKeyUp(event);
	};

	return (
		<div className={mixinClassName}>
			<ComponentMask {...props} />
			<input
				ref={ref}
				type="text"
				className={`${originClassName}-input`}
				defaultValue={props.value}
				maxLength={props.mask}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
			/>
		</div>
	);
};

export default React.forwardRef(Component);