import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { supabase, getSession } from '../supabase';
export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
	const router = useRouter();
	const [user, setUser] = useState(null);

	//supabase auth listener for changes
	useEffect(() => {
		async function authListener() {
			supabase.auth.onAuthStateChange((event) => {
				if (event == 'SIGNED_OUT') {
					setUser(null);
					router.push('/');
				}
			});
		}
		authListener();
	}, []);

	useEffect(() => {
		const supabaseAuth = async () => {
			const session = await getSession();
			if (session) {
				return setUser(session.user);
			}
			return setUser(null);
		};
		supabaseAuth();
	}, []);
	//saves first user in mailchimp database
	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			async function getEmail() {
				if (event == 'SIGNED_IN') {
					const download = await fetch('/api/mailchimp', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(session.user),
					});
					const data = await download.json();
				}
			}
			getEmail();
		});
	}, []);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
