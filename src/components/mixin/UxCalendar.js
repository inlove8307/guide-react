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
						onChange={handleChange}
					/>
					{
						isYear &&
						<UxYearCalendar
							{...props}
							date={date}
							originClassName={originClassName}
							onChange={handleChange}
						/>
					}
					{
						isMonth &&
						<UxMonthCalendar
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