import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxDateCalendar.css";
import moment from "moment";
import "moment/locale/ko";
import UxButton from "components/base/UxButton";

const UxDateCalendar = (props) => {
	const originClassName = props.originClassName;
	const weeks = ["일", "월", "화", "수", "목", "금", "토"];
	const today = moment().format(props.format);
	const [data, setData] = useState([]);

	const getData = ({ year, month }) => {
		let date = moment([year, month, 1]);
		let prev = moment([year, month, 1]).add(-1, 'month').endOf('month');
		let next = moment([year, month, 1]).add(1, 'month');
		let array = [];

		do {
			array.push({
				year: date.get("year"),
				month: date.get("month"),
				date: date.get("date"),
				week: date.get("day")
			});

			date = date.add(1, "days");
		}
		while (month === date.get("month"));

		while(array[0].week !== 0) {
			array.unshift({
				year: prev.get("year"),
				month: prev.get("month"),
				date: prev.get("date"),
				week: prev.get("day")
			});

			prev.add(-1, "days");
		}

		do {
			array.push({
				year: next.get("year"),
				month: next.get("month"),
				date: next.get("date"),
				week: next.get("day")
			});

			next.add(1, "days");
		}
		while(array[array.length-1].week !== 6 || array.length < 7 * 6);

		return array;
	}

	const handleClick = (item) => {
		props.onChange && props.onChange(item.date);
	};

	useEffect(() => {
		setData(getData({
			year: moment(props.date).get("year"),
			month: moment(props.date).get("month")
		}));
	}, [props.date]);

	return (
		<div className={`${originClassName}-date`}>
			{
				weeks.map((item, index) => {
					return (
						<span
							key={index}
							className={`${originClassName}-week`}
						>
							{item}
						</span>
					)
				})
			}
			{
				data.map((item, index) => {
					const disabled = item.month !== moment(props.date).get("month");
					const selected = moment(props.date).isSame([item.year, item.month, item.date]);
					const isToday = moment(today).isSame([item.year, item.month, item.date]);
					return (
						<UxButton
							key={index}
							className={classnames(`${originClassName}-button`, {
								disabled,
								selected,
								isToday
							})}
							label={item.date}
							onClick={() => handleClick(item)}
						/>
					)
				})
			}
		</div>
	);
};

export default UxDateCalendar;