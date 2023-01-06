import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { supabase, getSession } from "../supabase";
export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [userSession, setUserSession] = useState(null);

  // const subscribeToAuthOnMount = () => {
  // 	onAuthStateChanged(auth, (newUser) => {
  //         if (newUser) {
  //             return setUser(newUser)
  //         }
  //         return setUser(null)
  // 	});

  // 	return subscribeToAuthOnMount;
  // };

  //supabase auth listener for changes
  useEffect(() => {
    async function authListener() {
      supabase.auth.onAuthStateChange((event) => {
        if (event == "SIGNED_OUT") {
          setUser(null);
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
  console.log(user);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
