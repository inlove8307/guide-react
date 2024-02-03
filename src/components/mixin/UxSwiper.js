import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxSwiper.css";

const UxSwiper = (props) => {
	const originClassName = "ux-swiper";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxSwiper;