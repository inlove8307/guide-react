import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxSelect.css";
import { slotArray } from "utils/core";
import UxButton from "components/base/UxButton";
import UxIcon from "components/base/UxIcon";

const UxSelect = (props) => {
	const originClassName = "ux-select";
	const mixinClassName = classnames(originClassName, props.className, {
		valid: props.valid,
		invalid: props.invalid,
		readonly: props.readonly,
		disabled: props.disabled
	});
	const [extended, setExtended] = useState(false);
	const [selected, setSelected] = useState();
	const [value, setValue] = useState(props.value || null);
	const transRef = useRef();
	const preset = useRef();

	const handleButtonClick = (event) => {
		event.stopPropagation();
		setExtended(!extended);
		props.onClick && props.onClick(event);
	}

	const handleItemClick = (event, item) => {
		setExtended(false);
		setSelected(item.label);
		setValue(item.value);
		props.onSelect && props.onSelect(item);
	}

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	}

	const handleBlur = async (event) => {
		setExtended(false);
		props.onBlur && props.onBlur(event);
	}

	useEffect(() => {
		extended
		? transRef.current.style.maxHeight = `${transRef.current.scrollHeight}px`
		: transRef.current.style.maxHeight = "0";
	}, [extended]);

	useEffect(() => {
		setSelected(preset.current);
	}, [preset]);

	return (
		<div
			className={classnames(mixinClassName, {extended, selected})}
			style={{flexBasis: `${props.size}rem`}}
		>
			<div className={`${originClassName}-base`}>
				<UxButton
					className={`${originClassName}-button`}
					label={selected || props.placeholder}
					icon={
						<UxIcon
							className={`${originClassName}-icon`}
							icon={extended ? "angle-up" : "angle-down"}
						/>
					}
					disabled={props.readonly || props.disabled}
					onClick={handleButtonClick}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<div
					ref={transRef}
					className={`${originClassName}-trans`}
				>
					<div className={`${originClassName}-list`}>
						{
							slotArray(props.children).map((item, index) => {
								const selected = value === item.props["data-value"];
								const object = {
									value: item.props["data-value"],
									label: item.props["data-label"]
								}

								if (selected){
									preset.current = item.props["data-label"];
								}

								return (
									<span
										key={index}
										className={classnames(`${originClassName}-item`, item.props.className, {selected})}
										role="presentation"
										onMouseDown={(event) => handleItemClick(event, object)}
									>
										{item.props["data-label"]}
										{item.props.children && item.props.children}
									</span>
								);
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UxSelect;