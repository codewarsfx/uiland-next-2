
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://epcjufipobybxdmcqjgb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwY2p1Zmlwb2J5YnhkbWNxamdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyMzU1MDksImV4cCI6MTk4NzgxMTUwOX0.MAZAUEozeDU7f6ZKwia0OMlJ8WnZFi-FCn-4cpAUCcE"
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    console.log(data) 
    return data
   
  }

 export async function signout() {
    const { error } = await supabase.auth.signOut()
  }

  export async function getSession(){
 
    const {
		data: { session },
	  } = await supabase.auth.getSession();
      return session
  }
 