import React, { useState, useEffect } from 'react';
import { addImagesToScreens, getImage } from '../supabase';
function Admin() {
	const [available, setAvaliable] = useState([]);
	const [input, setInput] = useState('');
	const [company, setCompany] = useState('');
	const [screenIds, setScreenIds] = useState('');
	const [images, setImages] = useState([]);
	useEffect(() => {
		async function getAllImages() {
			images.map(async (image, id) => {
				if (!available.includes(image)) {
					if (input === 'yes') {
						const data = getImage(company, image);
						console.log(data);
						const red = await addImagesToScreens(screenIds, id, data.publicUrl);
						console.log(red);
						console.log(image);
						setAvaliable((prev) => {
							return [...prev, image];
						});
					}
				}
			});
		}
		getAllImages();
	}, [input]);

	console.log(available);
	function handleChange(e) {
		setInput(e.target.value);
	}
	function handleChangeCompany(e) {
		setInput(e.target.value);
	}
	function handleChangeScreenIds(e) {
		setInput(e.target.value);
	}
	return (
		<div>
			<input type='text' value={company} onChange={handleChangeCompany} />
			<input type='text' value={screenIds} onChange={handleChangeScreenIds} />
			<input type='text' value={input} onChange={handleChange} />
		</div>
	);
}

export default Admin;
