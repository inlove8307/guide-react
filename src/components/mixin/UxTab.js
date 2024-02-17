import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxTab.css";
import { slotArray } from "utils/core";

const UxTab = (props) => {
	const originClassName = "ux-tab";
	const mixinClassName = classnames(originClassName, props.className, {
		linear: props.linear,
		scroll: props.scroll,
		full: props.full
	});
	const [selected, setSelected] = useState(props.selected || 0);
	const [isChange, setIsChange] = useState(false);
	const tabsRef = useRef([]);
	const linearRef = useRef();
	const scrollRef = useRef();
	const data = (() => {
		let array = [];

		slotArray(props.children).map((item) => {
			array.push({
				label: item.props["data-label"],
				content: item.props.children
			});
		});

		return array;
	})();

	const handleClick = (event, index) => {
		setSelected(index);
		setIsChange(true);
		props.onChange && props.onChange(event, index);
	};

	const setLinear = (index) => {
		setTimeout(() => {
			linearRef.current.style.width = `${tabsRef.current[index].clientWidth}px`;
			linearRef.current.style.left = `${tabsRef.current[index].offsetLeft}px`;
		}, 1);
	};

	const setScroll = (index) => {
		tabsRef.current[index].scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth"
		});
	};

	useEffect(() => {
		props.linear && setLinear(selected);
		props.scroll && isChange && setScroll(selected);
	}, [selected]);

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<div
					ref={scrollRef}
					className={`${originClassName}-scroll`}
				>
					<div className={`${originClassName}-list`}>
						{data.map((item, index) => {
							const active = selected === index;
							return (
								<button
									ref={(element) => {tabsRef.current[index] = element}}
									key={index}
									className={classnames(`${originClassName}-button`, {active})}
									onClick={(event) => handleClick(event, index)}
								>
									<span className={`${originClassName}-label`}>
										{item.label}
									</span>
								</button>
							)
						})}
						{
							props.linear &&
							<span
								ref={linearRef}
								className={`${originClassName}-linear`}
							/>
						}
					</div>
				</div>
				{data.map((item, index) => {
					const active = selected === index;
					return (
						<div
							key={index}
							className={classnames(`${originClassName}-panel`, {active})}
						>
							{item.content}
						</div>
					);
				})}
			</div>
		</div>
	)
};

export default UxTab;