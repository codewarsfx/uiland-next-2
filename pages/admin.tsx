import React, { useState, useEffect } from 'react';
import { addImagesToScreens, getImage } from '../supabase';
function Admin() {
	const [available, setAvaliable] = useState([]);
	const [input, setInput] = useState('');
	const [company, setCompany] = useState('');
	const [screenIds, setScreenIds] = useState('');
	const [images, setImages] = useState([
		//add images json to screen

		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_212829.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213006.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213041.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213045.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213102.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213137.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213229.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213259.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213400.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213409.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213425.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213431.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213456.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213513.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213523.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213529.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213539.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213610.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213636.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213647.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213910.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213927.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213935.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213949.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_213956.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214002.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214017.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214032.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214045.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214050.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214105.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214119.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214138.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214303.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214335.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214351.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214424.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214457.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_214504.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_221807.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222048.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222053.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222127.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222134.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222139.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222148.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222151.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222157.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222203.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222222.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222229.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222541.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222551.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222623.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_222629.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223221.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223226.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223254.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223302.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223340.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223345.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223350.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223357.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223411.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223417.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223616.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223636.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223724.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_223733.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224130.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224138.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224151.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224305.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224309.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224441.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224458.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224504.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224517.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224633.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224643.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224709.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224733.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224851.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224855.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224910.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224925.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224934.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_224939.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225002.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225012.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225016.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225021.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225039.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225047.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225057.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225103.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225111.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225119.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225124.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Buycoins/Screenshot_20230316_225133.png',
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
