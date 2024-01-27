import React, { useRef, useState } from "react";
import classnames from "classnames";
import "assets/css/components/base/UxFile.css";
import UxButton from "components/base/UxButton";

const Component = (props) => {
	const originClassName = "ux-file";
	const mixinClassName = classnames(originClassName, props.className);
	const fileRef = useRef();
	const [path, setPath] = useState("");

	const handleClick = (event) => {
		fileRef.current.click();
		props.onClick && props.onClick(event);
	}

	const handleChange = (event) => {
		const array = event.target.value.split("\\");
		setPath(array[array.length - 1]);
		props.onChange && props.onChange(event);
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
			<UxButton
				className={`${originClassName}-button`}
				label="파일"
				onClick={handleClick}
			/>
		</div>
	);
};

export default Component;