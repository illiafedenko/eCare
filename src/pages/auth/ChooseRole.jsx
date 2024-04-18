import React, { useState, useEffect } from 'react'
import NormalInput from '../../components/general/NormalInput'
import GradientButton from '../../components/general/GradientButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faHeart, faPersonCane, faPersonWalkingWithCane, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import CustomRadioButton from '../../components/general/CustomRadioButton';
import useAuthStore from '../../utils/authStore';
import Senior from '../main/Senior';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set, update } from 'firebase/database';

export default function ChooseRole() {

	const isSenior = useAuthStore((state) => state.chooseRoleSenior);
	const isCareGiver = useAuthStore((state) => state.chooseRoleCaregiver);
	const setRole = useAuthStore((state) => state.setRole);
	const setSeniorType = useAuthStore((state) => state.setSeniorType);
	const seniorType = useAuthStore((state) => state.seniorType);
	const uid = useAuthStore((state) => state.uid);

	const navigate = useNavigate();

	useEffect(() => {
	}, [isSenior, isCareGiver])

	useEffect(() => {
		setRole(true);
		setSeniorType("senior");
	}, [])


	const handleChooseRole = (r) => {
		setSeniorType(r);
		if (r == "senior") {
			setRole(true);
		}
		if (r == "family") {
			setRole(false);
		}
	}

	const handleContinue = () => {
		console.log(uid);
		// const db = getDatabase();
		const dbref = ref(getDatabase());
		const updates = {};
		updates[`users/${uid}/userType`] = seniorType;
		update(dbref, updates);
		const path = "/set_additional_info";
		navigate(path);
	}

	return (
		<div className=' relative h-screen w-screen flex items-center justify-center'>
			<div className=' relative h-screen w-screen flex items-center justify-center'>
				<div className=' absolute left-[44px] top-[32px]  text-gray-800'>
					{/* <a href='#' className='flex flex-row gap-3 text-gray-800'>
						<div className=' items-center flex flex-col justify-center'>
							<FontAwesomeIcon icon={faArrowLeftLong} />
						</div>
						<div><p className='text-[20px]'>Back</p></div>
					</a> */}
				</div>
				<div className=' h-3/4 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-2/5 relative flex flex-col justify-around px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[100px] border-[2px] min-w-[300px] border-green-600 rounded-[36px] pt-[80px] pb-[120px] '>
					<div className='font-poppins py-0 px-5 z-[20]'>
						<p className=' text-[32px] '>Choose your role</p>
						<p className=' text-[16px] text-gray-500 mt-[32px] '>Choose your role to continue</p>
					</div>
					<div className='z-20 flex flex-col gap-8'>
						<div className=' py-0 z-[20]'>
							<div className=' w-full h-[60px] bg-gray-300 rounded-[8px] flex flex-row items-center justify-between px-[24px] '>
								<div className='flex flex-row items-center gap-1'>
									<FontAwesomeIcon icon={faPersonCane} />
									<p className=' font-poppins font-bold'>I am senior</p>
								</div>
								<CustomRadioButton label="senior" onClick={handleChooseRole} value={isSenior} />
							</div>
						</div>
						<div className=' py-0 z-[20]'>
							<div className=' w-full h-[60px] bg-gray-300 rounded-[8px] flex flex-row items-center justify-between px-[24px] '>
								<div className='flex flex-row items-center gap-1'>
									<FontAwesomeIcon icon={faHeart} />
									<p className=' font-poppins font-bold'>I am family</p>
								</div>
								<CustomRadioButton label="family" onClick={handleChooseRole} value={isCareGiver} />
							</div>
						</div>
					</div>
					<div className='py-0 z-[20]'>
						<GradientButton onClick={handleContinue} text="Continue" />
					</div>
					{/* <div className=' absolute right-0 bottom-[-20px] w-1/3 h-1/3 bg-gradient-to-tl from-green-300 to-white rounded-full'></div> */}
					<div className=' absolute right-[-15px] sm:right-[-45px] top-[30px] w-[160px] h-[160px] bg-green-600 rounded-full z-[5]'></div>
					<div className='absolute right-0 top-0 rounded-[36px] w-full h-full z-[10] backdrop-blur-[128px]'>
					</div>
				</div>
			</div>
		</div>
	)
}