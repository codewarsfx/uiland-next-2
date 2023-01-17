import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

//supabase signup with Google Oauth
const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: getURL(),
    },
  });
  return data;
}

//    get all screens
export async function getAllScreens() {
  let { data: Screens, error } = await supabase.from("Screens").select("*");
  // Screens.forEach((res)=>{
  //   return res['user'] = "a4f0bf66-2a36-4b4f-bf8b-b082cf9aa5c4"
  // })
  console.log(Screens);
  return Screens;
}

//    get all limited screens
// export async function getLimitedScreens() {
//   let { data: Screens, error } = await supabase.from("Screens").select("*").limit(1);
//   console.log("king",Screens);
//   return Screens;
// }


//get individual screens content

export async function getScreensById(id) {
  const { data, error } = await supabase
    .from("screenImages")
    .select("*")
    //   i will use this to limit the result later
    //   .limit(1)
    .eq("screenId", id);
  return data;
}

//get individual screens content(limited)
export async function getLimitedScreensById(id) {
  const { data, error } = await supabase
    .from("screenImages")
    .select("*")
    .limit(1)
    .eq("screenId", id);
  return data;
}

//supabase session
export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}


// export async function getUserByLocalStorage() {
//  const y = typeof window !== 'undefined' ?await JSON.parse(localStorage.getItem("user")) : null
//  console.log("p",y)
//  return y

// }



//get paying user by checking the event key
export async function getProfileByEvent(user) {
  
const { data, error } = await supabase
.from('profile')
.select('event')
  //   i will use this to limit the result later
  //   .limit(1)
  .eq("id", user.id);
  console.log("event", data, error);
  return data;
}

//Experiment to limit content 
// export async function getLimitedResult(id) {
//   const getEvent = await getProfileByEvent();
//   console.log("secondevent", getEvent);
//   let getResult;
//          console.log(getEvent[0].event)
//  if (!getEvent[0].event) {
//     getResult = await getLimitedScreensById(id);
//     console.log("limit", getResult);
//   } else {
//     getResult = await getScreensById(id);
//     console.log("full", getResult);
//   }
//   return getResult;
// }

// export async function addUserId(id, user) {
//   console.log(id, user);
//   const getEvent = await getProfileByEvent(user);
//   console.log("secondevent", getEvent.event);
//   let getResult;
//   if (!getEvent.event) {
//     getResult = await getLimitedScreensById(id);
//     console.log("limit", getResult);
//   } else {
//     d = await getScreensById(id);
//     console.log("full", getResult);
//   }
//   return getResult;
// }
// export async function getHeaderInfo() {
//     // const session = await getSession();
//     // console.log("damn",session)
//       const red = await getProfileByEvent()
//     console.log("secondevent",red.event)
//     let d
//     if(!red.event){
//       d= await getLimitedScreens();
//      console.log("limit",d)
//     }else{
//        d= await getAllScreens();
//       console.log("full",d)
//     }
//     return d
//      };

export async function getScreensProperties(id) {
  const { data, error } = await supabase
    .from("Screens")
    .select("*")
    .eq("id", id);
  
  const result =  data? data[0] : [];
  return result;
}

//get Album Bookmark

export async function getBookmarks(user) {
  const { data, error } = await supabase
    .from("bulkBookmark")
    .select(
      `
       id,
       album_id (
           id,
           startScreens,
           logo,
           name,
           url,
           category
       )
     `
    )
    .eq("user_id", user.id);

  //   i will use this to limit the result
  //   .limit(1)
  //   .eq('screenId', 'b76461af-34f9-4523-a892-b4991dfa364a')

  console.log(data);
  return data;
}

//view single Bookmark

export async function viewSingleBookmark(name) {
  const { data, error } = await supabase
    .from("singleImageBookmark")
    .select(
      `
      id,
      screen_id (
          id,
          url
      )
    `
    )
    .eq("bookmark_name", name);
  console.log(data);
  return data;
}

//delete bulkscreen
export async function DeleteScreens(id) {
  const { error, data } = await supabase
    .from("bulkBookmark")
    .delete()
    .eq("album_id", id);
  console.log(data);
  console.log(error);
  return data;
}

//add album to bookmark
export async function addBookmark(id, user) {
  const { data, error } = await supabase
    .from("bulkBookmark")
    .insert({ album_id: id, user_id: user.id })
    .select();

  console.log(data);
  return data;
}

//    get bookmark id in single bookmark
export async function getAlbumBookmarkId(user) {
  console.log(user);
  const { data, error } = await supabase
    .from("bulkBookmark")
    .select("album_id")
    .eq("user_id", user?.id);
  console.log(data);

  return data;
}

//add images to singleImageBookmark
export async function addSingleScreens(content, input, user) {
  console.log(content, input, user);
  const { data, error } = await supabase
    .from("singleImageBookmark")
    .insert({
      screen_id: content.id,
      bookmark_name: input,
      url: content.url,
      user_id: user.id,
    })
    .select();
  return data;
}

//delete singlebookmark
export async function DeleteSingleScreens(result) {
  console.log(result.id);
  const { error, data } = await supabase
    .from("singleImageBookmark")
    .delete()
    .eq("screen_id", result.id);
  console.log(data);
  return data;
}

//get images from singleImageBookmark
export async function getSingleScreens(user) {
  const { data, error } = await supabase
    .from("singleImageBookmark")
    .select(
      `
                screen_id,
                screenImages (
                    id,
                    url
                )
              `
    )
    .eq("user_id", user.id);
  return data;
}

//    get bookmark id in single bookmark
export async function getAllSingleBookmarkId(user) {
  const { data, error } = await supabase
    .from("singleImageBookmark")
    .select("screen_id")
    .eq("user_id", user?.id);
  console.log(data);

  return data;
}

//    get unique bookmark names in single bookmark
export async function getAllSingleBookmarkNames() {
  const { data, error } = await supabase
    .from("singleImageBookmark")
    .select("bookmark_name");
  // .eq('user_id', user.id)
  console.log(data);
  //gets unique names in the db
  const result = data?.map((object) => object.bookmark_name);
  const uniqueResult = [...new Set(result)];
  return uniqueResult;
}

//delete account
export async function deleteAccount(user) {
  const { data, error } = await supabase
    .from("profile")
    .delete()
    .eq("id", user.id);
  console.log(data);
  return data;
}

//supabase signout
export async function signout() {
  await supabase.auth.signOut();
}


export async function getUserProfile(user) {
  console.log("wow",user)
  if(user){
    console.log("yes",user)
     const { data, error } = await supabase
    .from("profile")
    .select("*")
    //   i will use this to limit the result later
    //   .limit(1)
    .eq("id", user.id);
    console.log(data)
  return data;
  }
 
}