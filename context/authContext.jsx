import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const subscribeToAuthOnMount = () => {
		onAuthStateChanged(auth, (newUser) => {
            if (newUser) {
                return setUser(newUser)
            }
            return setUser(null)
		});

		return subscribeToAuthOnMount;
	};

	useEffect(subscribeToAuthOnMount, [subscribeToAuthOnMount]);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};


