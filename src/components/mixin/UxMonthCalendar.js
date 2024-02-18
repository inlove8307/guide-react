import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxMonthCalendar.css";
import moment from "moment";
import "moment/locale/ko";
import UxButton from "components/base/UxButton";

const UxMonthCalendar = (props) => {
	const originClassName = props.originClassName;
	const [data, setData] = useState([]);

	const getData = () => {
		let array = [];

		while (array.length < 12) {
			array.push(array.length + 1);
		}

		return array;
	};

	const handleClick = (item) => {
		props.onChange && props.onChange(item - 1);
	};

	useEffect(() => {
		setData(getData());
	}, []);

	return (
		<div className={`${originClassName}-month`}>
			{
				data.map((item, index) => {
					const selected = item === moment(props.date).get("month") + 1;
					return (
						<UxButton
							key={index}
							className={classnames(`${originClassName}-button`, {selected})}
							label={`${item}월`}
							onClick={() => handleClick(item)}
						/>
					)
				})
			}
		</div>
	);
};

export default UxMonthCalendar;