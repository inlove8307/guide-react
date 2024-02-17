import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxAlert.css";
import UxButton from 'components/base/UxButton';
import UxIcon from "components/base/UxIcon";

const UxAlert = (props) => {
	const originClassName = props.originClassName;

	return (
		<>
			<div className={`${originClassName}-header`}>
				{props.title || "알림"}
				<UxButton
					className={`${originClassName}-close`}
					icon={<UxIcon icon="clear" />}
					onClick={props.close}
				/>
			</div>
			<div className={`${originClassName}-main`}>
				{props.children}
			</div>
			<div className={`${originClassName}-footer`}>
				<UxButton
					className={`${originClassName}-button fill`}
					label={props.label || "확인"}
					onClick={(close) => props.onConfirm && props.onConfirm(close)}
				/>
			</div>
		</>
	)
};

export default UxAlert;