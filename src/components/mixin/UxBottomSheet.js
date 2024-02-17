import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxBottomSheet.css";
import UxButton from 'components/base/UxButton';
import UxIcon from "components/base/UxIcon";

const UxBottomSheet = (props) => {
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
					className={`${originClassName}-button`}
					label={props.label?.cancel || "취소"}
					onClick={(close) => props.onCancel && props.onCancel(close)}
				/>
				<UxButton
					className={`${originClassName}-button fill`}
					label={props.label?.confirm || "확인"}
					onClick={(close) => props.onConfirm && props.onConfirm(close)}
				/>
			</div>
		</>
	);
};

export default UxBottomSheet;