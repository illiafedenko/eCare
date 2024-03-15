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



const dummyData = {
	servicesData: [
		{
			name: "Resident Care",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Elderly Nutrition",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Skilled Nursing",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
		},
		{
			name: "Caring Staff",
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
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
			description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. ",
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
}

export default dummyData;