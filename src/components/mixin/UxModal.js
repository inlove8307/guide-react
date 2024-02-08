import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import { getClosest } from "utils/dom";
import "assets/css/components/mixin/UxModal.css";
import UxButton from 'components/base/UxButton';

const Alert = (props) => {
	const originClassName = props.originClassName;

	return (
		<>
			<div className={`${originClassName}-header`}>
				{props.title || "알림"}
				<UxButton
					className={`${originClassName}-close`}
					icon={<span className="ux-icon-clear" />}
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

const Confirm = (props) => {
	const originClassName = props.originClassName;

	return (
		<>
			<div className={`${originClassName}-header`}>
				{props.title || "알림"}
				<UxButton
					className={`${originClassName}-close`}
					icon={<span className="ux-icon-clear" />}
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
	)
};

const BottomSheet = (props) => {
	const originClassName = props.originClassName;

	return (
		<>
			<div className={`${originClassName}-header`}>
				{props.title || "알림"}
				<UxButton
					className={`${originClassName}-close`}
					icon={<span className="ux-icon-clear" />}
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
	)
};

const Toast = (props) => {
	const originClassName = props.originClassName;

	return (
		<>
			<div className={`${originClassName}-main`}>
				{props.children}
				<UxButton
					className={`${originClassName}-close`}
					icon={
						<span
							className="ux-icon-clear"
							style={{ backgroundColor: "var(--light0)" }}
						/>
					}
					onClick={props.close}
				/>
			</div>
		</>
	)
};

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
					<Alert
						{...props}
						originClassName={originClassName}
					/>
				}
				{
					props.confirm &&
					<Confirm
						{...props}
						originClassName={originClassName}
					/>
				}
				{
					props.bottom &&
					<BottomSheet
						{...props}
						originClassName={originClassName}
					/>
				}
				{
					props.toast &&
					<Toast
						{...props}
						originClassName={originClassName}
					/>
				}
				{props.modal && props.children}
			</div>
		</div>
	)
};

export default UxModal;