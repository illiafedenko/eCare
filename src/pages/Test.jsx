import React from 'react'

export default function Test() {
	return (
		<main className="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500 text-sm">
			<label for="email" className="mb-5">
				<span>Email</span>
				<input
					type="email"
					name="email"
					id="email"
					className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
					placeholder=" "
					required
					pattern="/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/"
				/>
				<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
					Please enter a valid email address
				</span>
			</label>
			<label for="password" className="mb-5">
				<span>Password</span>
				<input
					type="password"
					name="password"
					id="password"
					className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
					placeholder=" "
					required
				/>
			</label>
			<button className="mt-5 bg-blue-500 py-3 rounded-md text-white group-invalid:pointer-events-none group-invalid:opacity-30">Submit</button>
		</main>
	)
}
