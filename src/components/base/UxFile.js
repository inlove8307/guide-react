import React, { useRef, useState } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxFile.css";
import { slotArray, mergeProps } from "utils/core";
import UxButton from "components/base/UxButton";

const UxFile = (props) => {
	const originClassName = "ux-file";
	const mixinClassName = classnames(originClassName, props.className, { default: !props.children });
	const fileRef = useRef();
	const [path, setPath] = useState("");
	const children = useRef(null);

	const handleClick = (event) => {
		fileRef.current.click();
		props.onClick && props.onClick(event);
	}

	const handleChange = (event) => {
		const array = event.target.value.split("\\");
		!props.children && setPath(array[array.length - 1]);
		props.onChange && props.onChange(event);
	}

	if (React.isValidElement(props.children)) {
		children.current = mergeProps(props.children, { onClick: handleClick });
	}

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<input
					type="file"
					ref={fileRef}
					className={`${originClassName}-input`}
					onChange={handleChange}
				/>
				<span className={classnames(`${originClassName}-label`, {path: path})}>
					{path || props.placeholder}
				</span>
			</div>
			{
				!children.current &&
				<UxButton
					className={`${originClassName}-button`}
					label="파일"
					onClick={handleClick}
				/>
			}
			{children.current && children.current}
		</div>
	);
};

export default UxFile;