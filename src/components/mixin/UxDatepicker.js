import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxDatePicker.css";
import useModals from "hook/useModals";
import moment from "moment";
import UxModalContainer from "components/layout/UxModalContainer"
import UxModalHeader from "components/layout/UxModalHeader"
import UxModalMain from "components/layout/UxModalMain"
import UxButton from "components/base/UxButton";
import UxIcon from "components/base/UxIcon";
import UxInput from "components/base/UxInput";
import UxCalendar from "components/mixin/UxCalendar";

const UxDatePicker = (props) => {
	const originClassName = "ux-datepicker";
	const mixinClassName = classnames(originClassName, props.className);
	const { Modal, Close } = useModals();
	const format = "YYYY.MM.DD";
	const [date, setDate] = useState(props.date || moment().format(format));

	const handleChange = (event) => {
		const pattern = /^\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/;
		pattern.test(event.target.value) && setDate(event.target.value);
	};

	const handleDateChange = (value) => {
		setDate(value);
		Close();
	};

	const handleClose = (close) => {
		Close();
		props.onClose && props.onClose(close);
	};

	const Component = (props) => {
		return (
			<UxModalContainer className={`${originClassName}-container`}>
				<UxModalHeader className={`${originClassName}-header`}>
					<p>날짜선택</p>
					<UxButton
						icon={<UxIcon icon="clear" />}
						onClick={(close) => handleClose(close)}
					/>
				</UxModalHeader>
				<UxModalMain className={`${originClassName}-main`}>
					<UxCalendar
						date={date}
						onDateChange={handleDateChange}
					/>
				</UxModalMain>
			</UxModalContainer>
		)
	}

	const handleClick = () => {
		Modal(<Component {...props} />);
	};

	useEffect(() => {
		console.log('UxDatePicker date', date);
	}, [date]);

	return (
		<div className={mixinClassName}>
			<UxInput
				value={date}
				placeholder="YYYY.MM.DD"
				icon={
					<UxIcon
						icon="calendar"
						onClick={handleClick}
					/>
				}
				pattern={{
					date: true,
					delimiter: '.',
					datePattern: ['Y', 'm', 'd']
				}}
				valid={props.valid}
				invalid={props.invalid}
				readonly={props.readonly}
				disabled={props.disabled}
				onChange={handleChange}
			/>
		</div>
	);
};

export default UxDatePicker;