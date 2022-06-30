import React, { useState } from "react";
import '../CSS/addTask.css'
import {db} from '../Config/firebase'
import {addDoc, collection} from 'firebase/firestore'

function AddTask(props){
    const [taskName,setTaskName] = useState("");
    const [taskDate,setTaskDate] = useState("");
    const [taskTime,setTaskTime] = useState("");
    const [taskPriority,setTaskPriority] = useState("");

    const addTask = (()=>{
        // console.log(taskName)
        // console.log(taskDate)
        // console.log(taskPriority)
        const collectionReF = collection(db, "tasks");
        const tasks = {
            taskName:taskName,
            taskDate:taskDate,
            taskPriority:taskPriority,
            taskTime:taskTime
        };
        addDoc(collectionReF, tasks).then(()=>{
            alert("added successfully")
        }).catch((err)=>{
            console.log(err);
        })
        props.add(taskName, taskDate, taskPriority, taskTime)
    })
    return(
        <div className="main">
            <div className="sub-div">
                 <h1>TO-DO LIST</h1>
                <input className="input2" type="text" placeholder="Enter Task" onChange={((e)=>setTaskName(e.target.value))} />
                <input className="input2" id="date" type="date" placeholder="Enter Date" onChange={((e)=>setTaskDate(e.target.value))}/>
                <input className="input2" type="time" placeholder="Time" onChange={((e)=>setTaskTime(e.target.value))}/>
                <select onChange={((e)=>setTaskPriority(e.target.value))}>
                  <option>High</option>
                  <option>Middle</option>
                  <option>Low</option>
                </select>
                <button id="btn2" onClick={addTask}>AddTask</button>
                
            </div>
           
        </div>
    )
}

export default AddTask;