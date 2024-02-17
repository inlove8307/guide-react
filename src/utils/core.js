import React from "react";

export const sleep = (delay) => {
	new Promise((resolve) => {
		setTimeout(resolve, delay)
	});
};

export const slotArray = (children) => {
	if (Array.isArray(children)) {
		return children;
	}
	else {
		return [children];
	}
};

export const mergeProps = (element, object) => {
	if (React.isValidElement(element)) {
		return React.cloneElement(element, object);
	}
};