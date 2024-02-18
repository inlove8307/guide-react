import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxCalendar.css";
import moment from "moment";
import "moment/locale/ko";
import UxButton from "components/base/UxButton";
import UxIcon from "components/base/UxIcon";
import UxDateCalendar from "components/mixin/UxDateCalendar";
import UxYearCalendar from "components/mixin/UxYearCalendar";
import UxMonthCalendar from "components/mixin/UxMonthCalendar";

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

	const handleDateChange = (value) => {
		setDate(moment(date).date(value));
		props.onDateChange && props.onDateChange(moment(date).date(value).format(format));
	};

	const handleYearChange = (value) => {
		setDate(moment(date).year(value));
		props.onYearChange && props.onYearChange(moment(date).year(value).format(format));
	};

	const handleMonthChange = (value) => {
		setDate(moment(date).month(value));
		props.onMonthChange && props.onMonthChange(moment(date).month(value).format(format));
	};

	useEffect(() => {
		setIsYear(false);
		setIsMonth(false);
		props.onChange && props.onChange(moment(date).format(format));
	}, [date]);

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<div className={`${originClassName}-header`}>
					<UxButton
						className={classnames(`${originClassName}-prev`)}
						icon={<UxIcon icon="angle-left" />}
						onClick={handlePrev}
					/>
					<UxButton
						className={classnames(`${originClassName}-select`)}
						label={`${moment(date).get("year")}년`}
						icon={<UxIcon icon={isYear ? "angle-up" : "angle-down"} />}
						onClick={handleYear}
					/>
					<UxButton
						className={classnames(`${originClassName}-select`)}
						icon={<UxIcon icon={isMonth ? "angle-up" : "angle-down"} />}
						label={`${moment(date).get("month") + 1}월`}
						onClick={handleMonth}
					/>
					<UxButton
						className={classnames(`${originClassName}-next`)}
						icon={<UxIcon icon="angle-right" />}
						onClick={handleNext}
					/>
				</div>
				<div className={`${originClassName}-content`}>
					<UxDateCalendar
						{...props}
						format={format}
						date={date}
						originClassName={originClassName}
						onChange={handleDateChange}
					/>
					{
						isYear &&
						<UxYearCalendar
							{...props}
							date={date}
							originClassName={originClassName}
							onChange={handleYearChange}
						/>
					}
					{
						isMonth &&
						<UxMonthCalendar
							{...props}
							date={date}
							originClassName={originClassName}
							onChange={handleMonthChange}
						/>
					}
				</div>
			</div>
		</div>
	);
};

export default UxCalendar;