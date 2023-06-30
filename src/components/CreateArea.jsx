import React, {useState} from "react";

function CreateArea(props) {
  var [note, setNewNote] = useState({
    "title":"",
    "content":""
  })
  
  
  function noteCreate(event){
    const {name, value} = event.target
    setNewNote((prevValue) =>{
      return {
        ...prevValue,
        [name] : value
      }
    }
    );
  }


  function onAdd(event){
    props.onAdd(note)

    event.preventDefault();

  }

  return (
    <div>
      <form>
        <input onChange = {noteCreate} name="title" placeholder="Title" value ={note.title} />
        <textarea onChange = {noteCreate} name="content" placeholder="Take a note..." rows="3" value = {note.content}/>
        <button onClick = {onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
