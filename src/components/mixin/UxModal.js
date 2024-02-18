import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import { getClosest } from "utils/dom";
import "assets/css/components/layout/UxModal.css";
import UxButton from 'components/base/UxButton';
import UxIcon from 'components/base/UxIcon';
import UxAlert from 'components/mixin/UxAlert';
import UxConfirm from 'components/mixin/UxConfirm';
import UxBottomSheet from 'components/mixin/UxBottomSheet';
import UxToast from 'components/mixin/UxToast';

const UxModal = (props) => {
	const originClassName = "ux-modal";
	const mixinClassName = classnames(originClassName, props.className, {
		base: props.modal,
		alert: props.alert,
		confirm: props.confirm,
		bottom: props.bottom,
		toast: props.toast
	});
	const modalRef = useRef();
	const baseRef = useRef();

	const handleClick = (event) => {
		if (!getClosest(event.target, `.${originClassName}-base`)) {
			props.close();
		}
	}

	const handleClose = (close) => {
		props.close();
		props.onClose && props.onClose(close);
	}

	useEffect(() => {
		const container = document.querySelector(".ux-container");

		setTimeout(() => {
			modalRef.current.style.paddingRight = `${container.offsetWidth - container.clientWidth}px`;
			modalRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
			baseRef.current.style.transform = "translateY(0)";
		}, 1);
	}, []);

	return (
		<div
			ref={modalRef}
			className={mixinClassName}
			role="presentation"
			onClick={handleClick}
		>
			<div
				ref={baseRef}
				className={`${originClassName}-base`}
			>
				{
					props.alert &&
					<UxAlert
						{...props}
						originClassName={originClassName}
					/>
				}
				{
					props.confirm &&
					<UxConfirm
						{...props}
						originClassName={originClassName}
					/>
				}
				{
					props.bottom &&
					<UxBottomSheet
						{...props}
						originClassName={originClassName}
					/>
				}
				{
					props.toast &&
					<UxToast
						{...props}
						originClassName={originClassName}
					/>
				}
				{
					props.modal && props.children
				}
			</div>
		</div>
	)
};

export default UxModal;