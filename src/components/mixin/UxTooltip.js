import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxTooltip.css";
import UxButton from "components/base/UxButton";
import { getClosest } from "utils/dom";

const UxTooltip = (props) => {
	const originClassName = "ux-tooltip";
	const mixinClassName = classnames(originClassName, props.className);
	const [isShow, setIsShow] = useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	};

	const handleClose = () => {
		setIsShow(false);
	};

	const handleDocumentClick = (event) => {
		if (!getClosest(event.target, `.${originClassName}`)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleDocumentClick);

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, []);

	return (
		<div
			className={mixinClassName}
		>
			<UxButton
				icon={props.icon}
				onClick={handleClick}
			/>
			{
				isShow &&
				<div className={classnames(`${originClassName}-base`, props.direction || "right")}>
					<div className={`${originClassName}-content`}>
						{props.children}
						{
							props.close &&
							<UxButton
								className={`${originClassName}-close`}
								icon={props.close}
								onClick={handleClose}
							/>
						}
					</div>
				</div>
			}
		</div>
	);
};

export default UxTooltip;