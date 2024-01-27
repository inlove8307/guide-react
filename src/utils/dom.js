export const getParents = (element, selector) => {
	let parents = [];

	while(element && element !== document){
		if (element.matches(selector)) {
			parents.push(element);
		}
		element = element.parentNode;
	}
	return parents;
}

export const getClosest = (element, selector) => {
	while(element && element !== document){
		if (element.matches(selector)) {
			return element;
		}
		element = element.parentNode;
	}
	return null;
}