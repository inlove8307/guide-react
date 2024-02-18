import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxYearCalendar.css";
import moment from "moment";
import "moment/locale/ko";
import UxButton from "components/base/UxButton";
import UxIcon from "components/base/UxIcon";

const UxYearCalendar = (props) => {
	const originClassName = props.originClassName;
	const [data, setData] = useState([]);
	const [year, setYear] = useState(moment(props.date).get("year"));
	const [row, col] = [5, 3];

	const getData = (year) => {
		let count = row * col;
		let index = year + Math.floor(count / 2);
		let array = [];

		while (array.length < count) {
			array.unshift(index--);
		}

		return array;
	};

	const handleClick = (item) => {
		props.onChange && props.onChange(item);
	};

	const handleChange = (direction) => {
		direction === "prev" && setYear(year - row * col);
		direction === "next" && setYear(year + row * col);
	}

	useEffect(() => {
		setData(getData(year));
	}, [year]);

	return (
		<div className={`${originClassName}-year`}>
			<UxButton
				className={classnames(`${originClassName}-button direction`)}
				icon={<UxIcon icon="caret-up" />}
				onClick={() => handleChange("prev")}
			/>
			{
				data.map((item, index) => {
					const selected = item === moment(props.date).get("year");
					return (
						<UxButton
							key={index}
							className={classnames(`${originClassName}-button`, {selected})}
							label={`${item}년`}
							style={{width: `${100 / col}%`}}
							onClick={() => handleClick(item)}
						/>
					)
				})
			}
			<UxButton
				className={classnames(`${originClassName}-button direction`)}
				icon={<UxIcon icon="caret-down" />}
				onClick={() => handleChange("next")}
			/>
		</div>
	);
};

export default UxYearCalendar;