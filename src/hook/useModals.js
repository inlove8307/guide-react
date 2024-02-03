import { useContext } from "react";
import { ModalsDispatchContext } from "context/ModalsContext";

export default function useModals() {
	const { open } = useContext(ModalsDispatchContext);

	const Modal = (Component, props) => {
		open(Component, {...props, modal: true});
	};

	const Alert = (Component, props) => {
		open(Component, {...props, alert: true});
	};

	const Confirm = (Component, props) => {
		open(Component, {...props, confirm: true});
	};

	const BottomSheet = (Component, props) => {
		open(Component, {...props, bottom: true});
	};

	return {
		Modal,
		Alert,
		Confirm,
		BottomSheet,
	};
}
