import React, { useContext } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "context/ModalsContext";
import UxModal from "components/mixin/UxModal";

const UxModals = (props) => {
	const openedModals = useContext(ModalsStateContext);
	const { close } = useContext(ModalsDispatchContext);

	return openedModals.map((modal, index) => {
		const { Component, props } = modal;

		const handleCancel = () => {
			props.onCancel && props.onCancel(close);
		}

		const handleConfirm = () => {
			props.onConfirm && props.onConfirm(close);
		}

		const handleClose = () => {
			props.onClose && props.onClose(close);
		}

		return (
			<UxModal
				{...props}
				key={index}
				children={Component}
				close={close}
				onCancel={handleCancel}
				onConfirm={handleConfirm}
				onClose={handleClose}
			/>
		)
	})
};

export default UxModals;