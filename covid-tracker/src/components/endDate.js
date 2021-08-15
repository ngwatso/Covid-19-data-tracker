/**
 * @prettier
 */

import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const EndDate = () => {
	const [endDate, setEndDate] = useState(new Date());

	return (
		<DatePicker
			selected={endDate}
			onChange={(date) => setEndDate(date)}
		/>
	);
};
