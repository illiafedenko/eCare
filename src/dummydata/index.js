import clientImage1 from '../assets/images/client1.png';
import clientImage2 from '../assets/images/client2.png';
import clientImage3 from '../assets/images/client3.png';

import caregiver1Image from '../assets/images/caregiver1.png';
import caregiver2Image from '../assets/images/caregiver2.png';
import caregiver3Image from '../assets/images/caregiver3.png';
import caregiver4Image from '../assets/images/caregiver4.png';
import caregiver5Image from '../assets/images/caregiver5.png';
import caregiver6Image from '../assets/images/caregiver6.png';
import caregiver7Image from '../assets/images/caregiver7.png';
import caregiver8Image from '../assets/images/caregiver8.png';

import dish1Image from '../assets/images/dish1.png';
import dish2Image from '../assets/images/dish2.png';
import dish3Image from '../assets/images/dish3.png';

import socialActivity1Image from '../assets/images/social1.png'
import socialActivity2Image from '../assets/images/social2.png'
import socialActivity3Image from '../assets/images/social3.png'
import socialActivity4Image from '../assets/images/social4.png'

import senior1Image from '../assets/images/senior1.png';
import senior2Image from '../assets/images/senior2.png';
import senior3Image from '../assets/images/senior3.png';
import senior4Image from '../assets/images/senior4.png';
import senior5Image from '../assets/images/senior5.png';

import chatimg1 from '../assets/images/chatimg1.jpg';
import chatimg2 from '../assets/images/chatimg2.jpg';
import chatimg3 from '../assets/images/chatimg3.jpg';
import chatimg4 from '../assets/images/chatimg4.jpg';
import chatimg5 from '../assets/images/chatimg5.jpg';
import chatimg6 from '../assets/images/chatimg6.jpg';

import { faBell, faCalendarAlt, faChalkboardTeacher, faClose, faDashboard, faGear, faHomeLg, faMessage, faSignOut, faUserDoctor, faUser } from '@fortawesome/free-solid-svg-icons';




const dummyData = {

	servicesData: [
		{
			name: "Resident Care",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
			details: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
			offers: [
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
			],
		},
		{
			name: "Elderly Nutrition",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
			details: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
			offers: [
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
			],
		},
		{
			name: "Skilled Nursing",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
			details: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
			offers: [
				"Name of the Service Offerings",
				"Name of the Service Offerings",
				"Name of the Service Offerings",
			],
		},
		{
			name: "Caring Staff",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
			details: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
			offers: [
				"Name of the Service Offerings",
				"Name of the Service Offerings",
			],
		},
	],
	clientReviews: [
		{
			name: "James Smith",
			imageURL: clientImage1,
			address: 'ABC Software',
			review: "Lorem ipsum dolor sit amet consectetur. Amet sed tellus elementum mauris. Libero maecenas eget tellus morbi diam enim euismod egestas. Adipiscing fringilla quis justo adipiscing eget aenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante. Tincidunt libero urna ut aliquet vitae nunc quisque sapien cursus.",
		},
		{
			name: "Thomas Jefferson",
			imageURL: clientImage2,
			address: 'ABC Software',
			review: "Lorem ipsum dolor sit amet consectetur. Amet sed tellus elementum mauris. Libero maecenas eget tellus morbi diam enim euismod egestas. Adipiscing fringilla quis justo adipiscing eget aenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante. Tincidunt libero urna ut aliquet vitae nunc quisque sapien cursus.",
		},
		{
			name: "Abraham Lincoln",
			imageURL: clientImage3,
			address: 'ABC Software',
			review: "Lorem ipsum dolor sit amet consectetur. Amet sed tellus elementum mauris. Libero maecenas eget tellus morbi diam enim euismod egestas. Adipiscing fringilla quis justo adipiscing eget aenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante. Tincidunt libero urna ut aliquet vitae nunc quisque sapien cursus.",
		},
	],
	historyData: [
		{
			date: 1990,
			title: "New Beginning",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
		},
		{
			date: 2000,
			title: "Residence Expand",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
		},
		{
			date: 2010,
			title: "Home Care Service Started",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
		},
		{
			date: 2020,
			title: "Country Wide Coverage",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
		},
	],
	careGivers: [
		{
			name: "Johe Doe",
			avatar: caregiver1Image,
			role: "Norse",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
			location: "califonia",
			gender: "female"
		},
		{
			name: "Jessica Parker",
			avatar: caregiver2Image,
			role: "Norse",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "male"
		},
		{
			name: "Jane Doe",
			avatar: caregiver3Image,
			role: "Doctor",
			description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
		{
			name: "Susan Onan",
			avatar: caregiver4Image,
			role: "Norse",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
		{
			name: "Johe Doe",
			avatar: caregiver5Image,
			role: "Doctor",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
		{
			name: "Johe Doe",
			avatar: caregiver6Image,
			role: "Norse",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
		{
			name: "Dan Ramos",
			avatar: caregiver7Image,
			role: "Doctor",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "male"
		},
		{
			name: "Johe Doe",
			avatar: caregiver8Image,
			role: "Norse",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
	],
	seniors: [
		{
			name: "Jane Doe",
			avatar: senior1Image,
			age: 78,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
		{
			name: "Robert Fox",
			avatar: senior2Image,
			age: 72,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "New York",
			gender: "male"
		},
		{
			name: "Johe Doe",
			avatar: senior3Image,
			age: 80,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
		{
			name: "Johe Doe",
			avatar: senior4Image,
			age: 59,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "male"
		},
		{
			name: "Johe Doe",
			avatar: senior5Image,
			age: 62,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. ",
			location: "califonia",
			gender: "female"
		},
	],
	dietData: [
		{
			name: "Meal Plan #1",
			image: dish1Image,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Meal Plan #2",
			image: dish2Image,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Meal Plan #3",
			image: dish3Image,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
	],

	socialActivitys: [
		{
			name: "Yoga",
			image: socialActivity1Image,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Board Games",
			image: socialActivity2Image,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Gardening",
			image: socialActivity3Image,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Indoor Games",
			image: socialActivity4Image,
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
	],
	cityList: [
		"New York",
		"Califonia",
		"Washington",
		"Phoenix",
		"Houston",
		"Dallas",
		"San Diego",
		"San Francisco",
		"Mesa",
		"Chicago",
		"San Antonio",
		"Las Vegas",
		"Fresno",
	],
	dateList: [
		"This Month",
		"Next Month"
	],
	availabilities: [
		"available",
		"employed",
	],
	budgetList: [
		"$599",
		"$1299",
		"$1999"
	],
	serviceOffers: [
		{
			name: "Name of the Service Offerings",
			current: true,
		},
		{
			name: "Go for a waking with the Care Givers",
			current: true,
		},
		{
			name: "Name of the  Offerings",
			current: true,
		},
		{
			name: "Name of the Service Offerings",
			current: true,
		},
		{
			name: "Name of the Service ",
			current: true,
		},
		{
			name: "Go for a waking with the Care Givers",
			current: true,
		},
		{
			name: "Play chess with the group members",
			current: false,
		},
		{
			name: "Name of the Service Offerings",
			current: false,
		},
		{
			name: "Play chess with the group members",
			current: false,
		},
	],
	availableDateTimeList: [
		{
			date: "Wednesday 15th october 2023",
			time: "8:00am",
		},
		{
			date: "Thursday 15th october 2023",
			time: "10:00am",
		},
		{
			date: "Friday 15th october 2023",
			time: "8:00am-9:00pm",
		},
		{
			date: "Saturday 15th october 2023",
			time: "9:00am",
		},
		{
			date: "Wednesday 15th october 2023",
			time: "8:00am",
		},
		{
			date: "Wednesday 15th october 2023",
			time: "8:00am",
		},
	],
	CGMenu: [
		{
			title: "Home",
			id: "home",
			icon: faHomeLg,
			badge: null
		},
		{
			title: "My Profile",
			id: "profile",
			icon: faUserDoctor,
			badge: null
		},
		{
			title: "Chat",
			id: "chat",
			icon: faMessage,
			badge: 2
		},
		{
			title: "Notifications",
			id: "notification",
			icon: faBell,
			badge: 3
		},
		{
			title: "Schedule",
			id: "schedule",
			icon: faCalendarAlt,
			badge: null
		},
		{
			title: "Training",
			id: "training",
			icon: faChalkboardTeacher,
			badge: null
		},
	],
	SMenu: [
		{
			title: "Home",
			id: "home",
			icon: faHomeLg,
			badge: null
		},
		{
			title: "My Profile",
			id: "profile",
			icon: faUserDoctor,
			badge: null
		},
		{
			title: "Chat",
			id: "chat",
			icon: faMessage,
			badge: 2
		},
		{
			title: "Notifications",
			id: "notification",
			icon: faBell,
			badge: 3
		},
		{
			title: "Schedule",
			id: "schedule",
			icon: faCalendarAlt,
			badge: null
		},
	],
	AMenu: [
		{
			title: "Home",
			id: "home",
			icon: faHomeLg,
			badge: null
		},
		{
			title: "Users",
			id: "users",
			icon: faUser,
			badge: null
		},
		{
			title: "Schedule",
			id: "schedule",
			icon: faCalendarAlt,
			badge: null
		},
	],

	chatImageList: [
		chatimg1,
		chatimg2,
		chatimg3,
		chatimg4,
		chatimg5,
		chatimg6,
	],

}

export default dummyData;