import React from "react"
function Note(props){

    function deleteHandler(){
        props.onDelete(props.id)
    }

    return(
        <div className="note container">
            <div class = "row">
            <h1 class = "col-4">{props.title}</h1>
            <p class = "col-4">{props.content}</p>
            <button onClick = {deleteHandler}>DELETE</button>
            </div>
        </div>
    )
}

export default Note