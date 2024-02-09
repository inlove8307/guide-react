import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxCalendar.css";
import moment from "moment";
import "moment/locale/ko";
import UxButton from "components/base/UxButton";

const DateCalendar = (props) => {
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
		props.onChange && props.onChange("date", item.date);
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
	)
}

const YearCalendar = (props) => {
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
		props.onChange && props.onChange("year", item);
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
				icon={<span className="ux-icon-caret-up" />}
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
							style={{ width: `${100 / col}%` }}
							onClick={() => handleClick(item)}
						/>
					)
				})
			}
			<UxButton
				className={classnames(`${originClassName}-button direction`)}
				icon={<span className="ux-icon-caret-down" />}
				onClick={() => handleChange("next")}
			/>
		</div>
	)
}

const MonthCalendar = (props) => {
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
		props.onChange && props.onChange("month", item - 1);
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
	)
}

const UxCalendar = (props) => {
	const originClassName = "ux-calendar";
	const mixinClassName = classnames(originClassName, props.className);
	const format = props.format || "YYYY.MM.DD";
	const [isYear, setIsYear] = useState(false);
	const [isMonth, setIsMonth] = useState(false);
	const [date, setDate] = useState(props.date || moment().format(format));

	const handlePrev = () => {
		setDate(moment(date).add(-1, "month"));
	};

	const handleNext = () => {
		setDate(moment(date).add(1, "month"));
	};

	const handleYear = () => {
		setIsYear(!isYear);
		setIsMonth(false);
	};

	const handleMonth = () => {
		setIsMonth(!isMonth);
		setIsYear(false);
	};

	const handleChange = (label, value) => {
		switch (label) {
			case("date"):
				setDate(moment(date).date(value));
				break;
			case("year"):
				setDate(moment(date).year(value));
				break;
			case("month"):
				setDate(moment(date).month(value));
				break;
		}
	};

	useEffect(() => {
		setIsYear(false);
		setIsMonth(false);
	}, [date]);

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<div className={`${originClassName}-header`}>
					<UxButton
						className={classnames(`${originClassName}-prev`)}
						icon={<span className="ux-icon-angle-left" />}
						onClick={handlePrev}
					/>
					<UxButton
						className={classnames(`${originClassName}-select`)}
						label={`${moment(date).get("year")}년`}
						icon={
							isYear
								? <span className="ux-icon-angle-up" />
								: <span className="ux-icon-angle-down" />
						}
						onClick={handleYear}
					/>
					<UxButton
						className={classnames(`${originClassName}-select`)}
						icon={
							isMonth
								? <span className="ux-icon-angle-up" />
								: <span className="ux-icon-angle-down" />
						}
						label={`${moment(date).get("month") + 1}월`}
						onClick={handleMonth}
					/>
					<UxButton
						className={classnames(`${originClassName}-next`)}
						icon={<span className="ux-icon-angle-right" />}
						onClick={handleNext}
					/>
				</div>
				<div className={`${originClassName}-content`}>
					<DateCalendar
						{...props}
						format={format}
						date={date}
						originClassName={originClassName}
						onChange={handleChange}
					/>
					{
						isYear &&
						<YearCalendar
							{...props}
							date={date}
							originClassName={originClassName}
							onChange={handleChange}
						/>
					}
					{
						isMonth &&
						<MonthCalendar
							{...props}
							date={date}
							originClassName={originClassName}
							onChange={handleChange}
						/>
					}
				</div>
			</div>
		</div>
	);
};

export default UxCalendar;