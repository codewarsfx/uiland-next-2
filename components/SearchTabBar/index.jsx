import React, { useState } from 'react'
import {getItemsNameByQuery} from "../../firebase"
const SearchTabBar = () => {
    const [input,setInput]=useState("")

   function handleChange(e){

    //have to change the value in the DB to lowercase 
    setInput(e.target.value.toLowerCase())
    }
function submit(e){
    e.preventDefault();
    console.log(input)
    getItemsNameByQuery(input)

}

  return (
    <div>
        <form onSubmit={submit}>
        <input type="text" value={input} onChange={handleChange}/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SearchTabBar