import React, { useState, useEffect } from 'react';
import { addImagesToScreens, getImage } from '../supabase';
function Admin() {
	const [available, setAvaliable] = useState([]);
	const [input, setInput] = useState('');
	const [company, setCompany] = useState('');
	const [screenIds, setScreenIds] = useState('');
	const [images, setImages] = useState([
		//add images json to screen

		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174410.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174414.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174422.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174434.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174650.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174752.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174847.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174909.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_174955.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175004.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175136.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175147.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175151.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175203.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175208.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175219.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175226.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175231.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175311.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175324.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175328.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175336.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175342.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175408.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175414.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175421.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175428.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175437.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175440.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175452.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175456.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175505.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175515.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175525.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175529.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175541.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175545.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175559.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175702.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175707.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175714.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175726.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175730.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175734.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175742.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175754.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175758.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175805.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175825.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175828.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175841.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175844.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175907.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175922.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175948.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175952.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_175958.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180004.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180008.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180018.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180031.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180034.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180037.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180059.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180116.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180126.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180200.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180205.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180211.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180216.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180231.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180237.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180243.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180300.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180309.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180318.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180323.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180327.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180352.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180402.png',
		'https://pub-4271c874f759418fbdcd18b0e5cbe024.r2.dev/Sendstack/Screenshot_20230317_180407.png',
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
