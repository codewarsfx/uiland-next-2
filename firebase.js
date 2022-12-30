import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { getFirestore, collection, getDocs,getDoc,setDoc,doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { prepareData } from "./utils/FirebaseUtilities";

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


// intialize auth
export const auth = getAuth(app);

if (typeof window !== 'undefined') {
	 const analytics = getAnalytics(app);
  }


// initialize cloud firestore

// ----------------SIGN IN WITH GOOGLE FUNCTIONALITY----------------------

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

export const signout = () => signOut(auth);

// --------------------------FIRESTORE QUERIES----------------------------------

export const db = getFirestore(app);

// read screens data
export const getScreensData = async () => {

	//get all screens
	const querySnapshot = await getDocs(collection(db, "Screens"));
     return prepareData(querySnapshot.docs)
};

export const queryBookMarkAlbum = async (user)=>{

	//read a user's bookmark (album)
	const querySnapshot = await getDocs(collection(db, "Users", user, "Bookmark"));
     return prepareData(querySnapshot.docs)

   }




   export const queryBookMarkIndividual = async (user)=>{

	//read a user's bookmark (individual images)
	const querySnapshot = await getDocs(collection(db, "Users", user, "BookmarkImage"));
     return prepareData(querySnapshot.docs)

   }
   

   export const addBookMark=async(user,id,contents)=>{

	//add album collection to bookmark
    await setDoc(doc(db, "Users",user,id), {
		id:id, 
		...contents
	  });

   }


   export const deleteBookMark=async(user,  id)=>{

		//delete album collection to bookmark
	await deleteDoc(doc(db, "Users",user,"Bookmark",id), {
		  id: id
		});
	   
	 }

export const getindividualScreenData=async (id)=>{

	//get screens by id
	const querySnapshot=  await getDoc(doc(db,"Screens",id))
	const data = querySnapshot.data()
	return data
   }

   export const bookmarkSelected=async(user,contents,newField)=>{

	//create new collection and add content
	const newBookmark = newField
    await setDoc(doc(db, "Users",user.uid,newBookmark,contents.id), {
		date: serverTimestamp(),
		bookmarkName:newBookmark,
		id:id, 
		...contents
	  });
   }

   export const deleteBookmarkSelected=async(user,  content)=>{

	//delete item from individual collection
await deleteDoc(doc(db, "Users",user,content.bookmarkName,content.id), {
	  id: id
	});
   
 }