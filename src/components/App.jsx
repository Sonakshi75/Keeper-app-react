import React, {useState} from "react"
import Heading from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea"


function App(){

    const [notes, newNotes] = useState([])

    function addNote(note){
        newNotes(prevValue => {
            return [...prevValue, note]
        })
        
    }

    function deleteNode(id){
        newNotes(prevValue => {
            return prevValue.filter((notes, index)=>{
                return index!==id
            })
        })
    }

    return (
        <div>
            <Heading />
            <CreateArea onAdd = {addNote} />
            {notes.map((x, index) => {
                return <Note key = {index} id = {index} title = {x.title} content = {x.content} onDelete = {deleteNode} />
            })}
            <Footer />
        </div>
    )
}

export default App