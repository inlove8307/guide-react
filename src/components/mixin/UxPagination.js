import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxPagination.css";
import UxButton from "components/base/UxButton";
import UxIcon from "components/base/UxIcon";

const UxPagination = (props) => {
	const originClassName = "ux-pagination";
	const mixinClassName = classnames(originClassName, props.className);
	const [page, setPage] = useState(props.page || 1);
	const [hasPrev, setHasPrev] = useState(false);
	const [hasNext, setHasNext] = useState(false);
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

	const getPrev = () => {
		return Math.ceil(page / props.unit) * props.unit - props.unit;
	};

	const getNext = () => {
		return Math.ceil(page / props.unit) * props.unit + 1;
	};

	const handlePage = (item) => {
		setPage(item);
	};

	const handlePrev = () => {
		setPage(getPrev());
	};

	const handleNext = () => {
		setPage(getNext());
	};

	const handleFirst = () => {
		setPage(1);
	}

	const handleLast = () => {
		setPage(props.total);
	}

	useEffect(() => {
		setData(getData());
		getPrev() > 0 ? setHasPrev(true) : setHasPrev(false);
		getNext() < props.total ? setHasNext(true) : setHasNext(false);
		props.onChange && props.onChange(page);
	}, [page]);

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<UxButton
					className={classnames(`${originClassName}-first`, { disabled: page === 1 })}
					icon={<UxIcon icon="angle-left-double" />}
					onClick={handleFirst}
				/>
				<UxButton
					className={classnames(`${originClassName}-prev`, { disabled: !hasPrev })}
					icon={<UxIcon icon="angle-left" />}
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
					className={classnames(`${originClassName}-next`, { disabled: !hasNext })}
					icon={<UxIcon icon="angle-right" />}
					onClick={handleNext}
				/>
				<UxButton
					className={classnames(`${originClassName}-last`, { disabled: page === props.total })}
					icon={<UxIcon icon="angle-right-double" />}
					onClick={handleLast}
				/>
			</div>
			{props.children}
		</div>
	);
};

export default UxPagination;