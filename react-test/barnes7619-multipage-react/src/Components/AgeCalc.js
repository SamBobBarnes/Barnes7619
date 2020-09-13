import React from 'react';

function AgeCalc(props) {
	const { bday, bmonth, byear } = props;

	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var day = d.getDate();
	var age = year - byear;

	if (month < bmonth - 1) {
		age -= 1;
	} else if (month === bmonth - 1) {
		if (day < bday) {
			age -= 1;
		}
	}

	return <p className='consolas'>Age: {age}</p>;
}

export default AgeCalc;
