import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { getFirestore, collection, getDocs,getDoc,doc } from "firebase/firestore";
import { prepareData } from "./utils/FirebaseUtilities";
// import { getAnalytics } from "firebase/analytics";

// firebase config object
const firebaseConfig = {
	apiKey: "AIzaSyDD90iRq1ZqO3v3lV6G_7307dJUHeeByJ4",
	authDomain: "uiland.firebaseapp.com",
	projectId: "uiland",
	storageBucket: "uiland.appspot.com",
	messagingSenderId: "743569551414",
	appId: "1:743569551414:web:baee6f033928b0fa1de897",
	measurementId: "G-9210JLHTVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// intialize auth
export const auth = getAuth(app);

// initialize cloud firestore

// ----------------SIGN IN WITH GOOGLE FUNCTIONALITY----------------------

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

export const signout = () => signOut(auth);

// --------------------------FIRESTORE QUERIES----------------------------------

const db = getFirestore(app);

// read screens data
export const getScreensData = async () => {
	const querySnapshot = await getDocs(collection(db, "Screens"));
     return prepareData(querySnapshot.docs)
};


export const getindividualScreenData=async (id)=>{
	const querySnapshot=  await getDoc(doc(db,"Screens",id))
	const der = querySnapshot.data()
	return der
   }