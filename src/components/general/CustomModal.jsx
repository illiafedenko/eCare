import React, { useState } from 'react'

export default function CustomModal({ isOpen, onClose, children }) {
	const handleClose = () => {
		onClose();
	};

	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded shadow-md">
						<div className="flex justify-end">
							<button
								className="text-gray-600 hover:text-gray-800"
								onClick={handleClose}
							>
								Close
							</button>
						</div>
						<div className="mt-4">{children}</div>
					</div>
				</div>
			)}
		</>
	);
}
