import React from "react"

function Search(props){
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" value={props.entrada} onChange={props.handleInput}/>
            <button>Search</button>
        </form>
    )
}
export default Search