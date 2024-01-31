import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxSelect.css";
import { arrayChild, mergeProps } from "utils/core";
import { getClosest } from "utils/dom";
import UxButton from "components/base/UxButton";

const Component = (props) => {
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

	const handleClick = (event) => {
		!getClosest(event.target, `.${originClassName}`) &&
		setExtended(false);
	}

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		}
	});

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
						extended ? <span className="ux-icon-arrow-up" /> : <span className="ux-icon-arrow-down" />
					}
					disabled={props.readonly || props.disabled}
					onClick={handleButtonClick}
				/>
				<div
					ref={transRef}
					className={`${originClassName}-trans`}
				>
					<div className={`${originClassName}-list`}>
						{
							arrayChild(props.children).map((item, index) => {
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
										onClick={(event) => handleItemClick(event, object)}
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

export default Component;