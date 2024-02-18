import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxToast.css";
import UxModalContainer from "components/layout/UxModalContainer"
import UxModalMain from "components/layout/UxModalMain"
import UxButton from 'components/base/UxButton';
import UxIcon from "components/base/UxIcon";

const UxToast = (props) => {
	const originClassName = props.originClassName;

	return (
		<UxModalContainer>
			<UxModalMain>
				{props.children}
				<UxButton
					className={`${originClassName}-close`}
					icon={
						<UxIcon
							icon="clear"
							color="white"
						/>
					}
					onClick={props.close}
				/>
			</UxModalMain>
		</UxModalContainer>
	);
};

export default UxToast;