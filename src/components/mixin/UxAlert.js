import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxAlert.css";
import UxModalContainer from "components/layout/UxModalContainer"
import UxModalHeader from "components/layout/UxModalHeader"
import UxModalMain from "components/layout/UxModalMain"
import UxModalFooter from "components/layout/UxModalFooter"
import UxButton from 'components/base/UxButton';
import UxIcon from "components/base/UxIcon";

const UxAlert = (props) => {
	const originClassName = props.originClassName;

	return (
		<UxModalContainer>
			<UxModalHeader>
				{props.title || "알림"}
				<UxButton
					icon={<UxIcon icon="clear" />}
					onClick={props.close}
				/>
			</UxModalHeader>
			<UxModalMain>
				{props.children}
			</UxModalMain>
			<UxModalFooter>
				<UxButton
					className="fill"
					label={props.label || "확인"}
					onClick={(close) => props.onConfirm && props.onConfirm(close)}
				/>
			</UxModalFooter>
		</UxModalContainer>
	)
};

export default UxAlert;