import React, { useState } from 'react';
import ToDoLists from './toDolIst';
const App=()=>{
    let [prevData,nextData]=useState('');
    let [totalItems,nextItem]=useState([]);
    const inputData=(event)=>{
        nextData(event.target.value);
    }
    const placeItem=()=>{

        nextItem((oldData)=>{
            return ([...oldData,prevData])
        });
        nextData("");
        console.log("Data is ",totalItems);
    }
    const deleteItems=(id)=>{
        nextItem(
            (oldItems)=>{
                return oldItems.filter((arrElement,index)=>{
                    return index!==id;
                })
            }
        )
    }
return(
    <>
    <div className='main-box d-flex justify-content-center'>
        <div className='center-box text-center'>
            <div id="title">
            <h1>ToDo List</h1>
            </div>
            <br/>
            <div id="text-area">
                <input class="form-control" type="text" name="name" value={prevData} placeholder='Enter the Item' onChange={inputData}/>
                <button onClick={placeItem}><h1>+</h1></button>
            </div>
            <div className="set-list d-flex justify-content-start">
            <ul>
            {
                totalItems.map(
                    function(val,index){
                        return(
                            // <div id="list-item">
                            // <button key={index} onClick={delItem}><h1>x</h1></button>
                            // <li>{val}</li>
                            //  </div>
                            <ToDoLists key={index} 
                            id={index} 
                            name={val} 
                            onSelect={deleteItems}/>//onSelect used to work function here
                        )
                    }
                )
            }
            
            </ul>
            </div>
        </div>
    </div>
    </>
)
}
export default App;