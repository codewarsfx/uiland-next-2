
import { createContext, useEffect, useState } from "react";

import { getScreensData } from "../firebase";


export const ScreensContext = createContext(null);

export const ScreensContextProvider = ({ children }) => {

    const [screens, setScreens] = useState(null);

	useEffect(() => {
		const getScreens = async () => {
			const screens = await getScreensData();

			if (screens) {
				setScreens(screens);
			}
		};

		getScreens();
	}, []);

	

	return <ScreensContext.Provider value={screens}>{children}</ScreensContext.Provider>;
};
