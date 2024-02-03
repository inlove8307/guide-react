import React, { useState, useMemo } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "context/ModalsContext";

const ModalsProvider = ({children}) => {
	const [openedModals, setOpenedModals] = useState([]);

	const open = (Component, props) => {
		setOpenedModals((modals) => {
			return [...modals, { Component, props }];
		});
	};

	const close = () => {
		setOpenedModals((modals) => {
			const clone = [...modals];
			clone.pop();
			return clone;
		});
	};

	const dispatch = useMemo(() => ({ open, close }), []);

	return (
		<ModalsStateContext.Provider value={openedModals}>
			<ModalsDispatchContext.Provider value={dispatch}>
				{children}
			</ModalsDispatchContext.Provider>
		</ModalsStateContext.Provider>
	)
};

export default ModalsProvider;