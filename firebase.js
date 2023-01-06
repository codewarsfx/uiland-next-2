import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { getFirestore, collection, getDocs,getDoc,setDoc,doc,deleteDoc,limit,serverTimestamp,query,where,addDoc,collectionGroup,onSnapshot } from "firebase/firestore";
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
	const querySnapshot = getDocs(collection(db, "Users", user, "Bookmark"));
     return prepareData(querySnapshot.docs)

   }
//    export const queryBookMarkAlbumm=async()=>{
// 	const properties =query(collectionGroup(db, "Bookmark")) ;
// const querySnapshot = getDocs(properties);
// console.log(querySnapshot.docs)
// return prepareData(querySnapshot.docs);
// }

   export const queryScreenImage = async (id)=>{

	//get all id screen images from an id
	const querySnapshot = await getDocs(collection(db, "screenImages", id, id));
     return prepareData(querySnapshot.docs)

   }


   export const queryBookMarkIndividual = async (user)=>{

	//read a user's bookmark (individual images)
	const querySnapshot =  getDocs(collection(db, "Users", user, "BookmarkImage"));
     return prepareData(querySnapshot.docs)

   }
   
   

   export const addBookMark=async(user,id,contents)=>{
	//add album collection to bookmark
    await setDoc(doc(db, "Users",user,"Bookmark",id), {
		date:serverTimestamp(),
		id:id, 
		contents
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
	console.log(user.uid,newBookmark,contents.id)
	
	await setDoc(doc(db, "Users",user.uid,newBookmark,contents.id), {
		date:serverTimestamp(),
		id:contents.id, 
		bookmarkName:newBookmark,
		...contents
	  });
   }

   export const deleteBookmarkSelected=async(user,  contents)=>{
console.log(user,contents.id)
	//delete item from individual collection
await deleteDoc(doc(db, "Users",user,"BookmarkImage",contents.id), {
	  id: contents.id
	});
   
 }

 export const getItemsCategoryByQuery = async (filterby) => {
console.log(filterby)
	//filter by category
	const citiesRef = collection(db, "Screens");
    const q = query(citiesRef, where("Category", "==", filterby));

	const querySnapshot = await getDocs(q);
	console.log(querySnapshot.docs)
    return prepareData(querySnapshot.docs)
}

export const getItemsNameByQuery = async (filterby) => {

	//filter by name
	const citiesRef = collection(db, "Screens");
    const q = query(citiesRef, where("Name", "==", filterby));

	const querySnapshot = await getDocs(q);
// console.log(querySnapshot.docs.map((j)=>console.log(j.data())))
    return prepareData(querySnapshot.docs);
}


export const updateBookMark=async(elementCategory,screenCategory,url,bookmarkName,order)=>{
	const citiesRef = collection(db, 'screenImages');
console.log(elementCategory,screenCategory,url,bookmarkName,order)
await addDoc(collection(citiesRef, bookmarkName, bookmarkName), {
	"order":order,
	"elementCategory":elementCategory,
	"screenCategory":screenCategory,
	 "url":url
    })


}

//filter individual screens by screencategory
export const getIndividualCategory=async(result,id)=>{
	const properties = query(collectionGroup(db, id), where('elementCategory', '==', result));
const querySnapshot = await getDocs(properties);
console.log(querySnapshot.docs)
return prepareData(querySnapshot.docs);
}

//limit individual screens
export const getIndividualLimit=async(id)=>{
	const properties = query(collectionGroup(db, "r48LXqoJjgd6dvB2sg7E"), limit(3));
const querySnapshot = await getDocs(properties);
console.log(querySnapshot.docs)
return prepareData(querySnapshot.docs);
}
export const deleteAccount =async (id)=>{
	//delete user from db
		  await deleteDoc(doc(db, "Users",id));
}
		