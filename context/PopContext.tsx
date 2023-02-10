import { createContext, SetStateAction, useEffect, useState } from 'react';

export const PopContext = createContext(null);

export const PopContextProvider = ({ children }) => {
	const [openNewsLetter, setOpenNewsLetter] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOpenNewsLetter(true);
		}, 8000);
	}, []);

	return (
		<PopContext.Provider
			value={{
				openNewsLetter,
				setOpenNewsLetter,
			}}
		>
			{children}
		</PopContext.Provider>
	);
};
