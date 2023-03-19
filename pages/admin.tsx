import React, { useState, useEffect } from 'react';
import { addImagesToScreens, getImage } from '../supabase';
function Admin() {
	const [available, setAvaliable] = useState([]);
	const [input, setInput] = useState('');
	const [company, setCompany] = useState('');
	const [screenIds, setScreenIds] = useState('');
	const [images, setImages] = useState([
		//add images json to screen

		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140724.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140735.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140743.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140750.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140826.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140832.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140907.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140920.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140930.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140935.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140946.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140951.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_140956.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141006.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141012.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141024.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141027.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141045.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141102.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141201.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141212.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141225.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141231.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141241.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141256.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141303.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141311.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141326.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141347.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141352.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141409.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141500.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141517.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141523.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141538.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141552.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141600.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141609.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141634.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141639.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141645.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141651.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141657.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141816.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141824.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141831.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141837.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141858.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141914.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141924.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141929.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141935.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_141957.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142002.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142017.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142028.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142053.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142058.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142111.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142122.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142130.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142140.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142147.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142201.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142236.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142242.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142254.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142300.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142306.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142331.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142341.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142406.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142416.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142424.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142443.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142449.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142502.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142511.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142516.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142521.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142526.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142620.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142653.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142659.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142717.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142722.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142744.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142748.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142830.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142847.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142851.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142900.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142905.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142911.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142920.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142943.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_142950.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_143002.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_143015.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_143028.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_143036.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_143043.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_143058.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Flutterwave/Screenshot_20230316_143114.png',
	]);
	useEffect(() => {
		async function getAllImages() {
			images.map(async (image, id) => {
				if (!available.includes(image)) {
					if (input === 'yes') {
						//This was for getting the image url from supabase server after the name of the image is passed in as a parameter
						// const data = getImage(company, image);

						const red = await addImagesToScreens(screenIds, id, image);
						// console.log(red);
						// console.log(image);
						setAvaliable((prev) => {
							return [...prev, image];
						});
					}
				}
			});
		}
		getAllImages();
	}, [input]);

	// console.log(available);
	function handleChange(e) {
		setInput(e.target.value);
	}
	function handleChangeCompany(e) {
		setCompany(e.target.value);
	}
	function handleChangeScreenIds(e) {
		setScreenIds(e.target.value);
	}
	return (
		<div>
			<label>Company:</label>
			<input type='text' value={company} onChange={handleChangeCompany} />
			<label>Id:</label>
			<input type='text' value={screenIds} onChange={handleChangeScreenIds} />
			<label>Code:</label>
			<input type='text' value={input} onChange={handleChange} />
		</div>
	);
}

export default Admin;
