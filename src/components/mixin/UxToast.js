import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxToast.css";
import UxButton from 'components/base/UxButton';
import UxIcon from "components/base/UxIcon";

const UxToast = (props) => {
	const originClassName = props.originClassName;

	return (
		<>
			<div className={`${originClassName}-main`}>
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
			</div>
		</>
	);
};

export default UxToast;