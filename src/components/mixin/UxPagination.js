import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxPagination.css";
import UxButton from "components/base/UxButton";

const UxPagination = (props) => {
	const originClassName = "ux-pagination";
	const mixinClassName = classnames(originClassName, props.className);
	const [page, setPage] = useState(props.page || 1);
	const [data, setData] = useState([]);

	const getData = () => {
		let array = [];
		let index = Math.ceil(page / props.unit) * props.unit;
		let limit = index - props.unit;

		while (limit < index) {
			index <= props.total && array.unshift(index);
			index--;
		}

		return array;
	};

	const handlePage = (item) => {
		setPage(item);
	};

	const handlePrev = () => {
		page > 1 && setPage(page - 1);
	};

	const handleNext = () => {
		page < props.total && setPage(page + 1);
	};

	useEffect(() => {
		setData(getData());
		props.onChange && props.onChange(page);
	}, [page]);

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
			<UxButton
				className={classnames(`${originClassName}-prev`, { disabled: page === 1 })}
				icon={<span className="ux-icon-arrow-left" />}
				onClick={handlePrev}
			/>
			{
				data.map((item, index) => (
					<UxButton
						key={index}
						className={classnames(`${originClassName}-page`, { selected: item === page })}
						label={item}
						onClick={() => handlePage(item)}
					/>
				))
			}
			<UxButton
				className={classnames(`${originClassName}-next`, { disabled: page === props.total })}
				icon={<span className="ux-icon-arrow-right" />}
				onClick={handleNext}
			/>
			</div>
			{props.children}
		</div>
	);
};

export default UxPagination;