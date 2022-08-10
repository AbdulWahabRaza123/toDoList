import React from 'react';
const ToDoLists=(props)=>{
return(
        <>
        <div id="list-item">
                <button onClick={()=>{
                        props.onSelect(props.id)
                }
                }><h1>x</h1></button>
                <li>{props.name}</li>
        </div>
        </>
)

}
export default ToDoLists;