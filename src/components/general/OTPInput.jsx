import React, { useState } from 'react'

export default function OTPInput() {


	const [otp, setOtp] = React.useState(['', '', '', '']);
	const inputRefs = React.useRef([]);

	const handleChange = (index, e) => {
		const value = e.target.value;
		if (isNaN(value)) return; // Only allow numeric input

		setOtp((prevOtp) => {
			const newOtp = [...prevOtp];
			newOtp[index] = value;
			return newOtp;
		});

		// Focus the next input
		if (value !== '') {
			if (index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.keyCode === 8 && otp[index] === '') {
			// If backspace is pressed and the current input is empty,
			// focus the previous input
			if (index > 0) {
				inputRefs.current[index - 1].focus();
			}
		}
	};

	return (
		<div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-10 xl:gap-16 z-[20]">
			{otp.map((digit, index) => (
				<input
					key={index}
					type="text"
					className="w-14 h-14 font-poppins text-center text-2xl font-extrabold text-slate-900 bg-slate-200 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-indigo-100"
					maxLength="1"
					pattern="\d*"
					value={digit}
					onChange={(e) => handleChange(index, e)}
					onKeyDown={(e) => handleKeyDown(index, e)}
					ref={(el) => (inputRefs.current[index] = el)}
				/>
			))}
		</div>
	)
}
