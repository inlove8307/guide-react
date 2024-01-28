import React from "react";

export const arrayChild = (children) => {
	if (Array.isArray(children)) {
		return children;
	}
	else {
		return [children];
	}
}

export const mergeProps = (element, object) => {
	if (React.isValidElement(element)) {
		return React.cloneElement(element, object);
	}
}