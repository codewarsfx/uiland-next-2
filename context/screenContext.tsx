import { createContext, useContext, useEffect, useState } from 'react';
import { getAllSingleBookmarkId } from '../supabase';
import { UserContext } from './authContext';

export const ScreenContext = createContext(null);


const screenContext:React.FC<screenContextProps> = () => {
	
	return <div>Have a good coding</div>
}
export default screenContext;

export const ScreenContextProvider = ({ children }) => {
	const user = useContext(UserContext);
	const [getId, setGetId] = useState([]);

	useEffect(() => {
		async function getIndividualScreens() {
			if (user) {
				const data = await getAllSingleBookmarkId(user);

				data.forEach((item) => {
					setGetId((prev) => {
						return [...prev, item.screen_id];
					});
				});
			}
		}
		getIndividualScreens();
	}, [user]);

	return (
		<ScreenContext.Provider value={{ getId, setGetId }}>
			{children}
		</ScreenContext.Provider>
	);
};

export default ScreenContextProvider;
