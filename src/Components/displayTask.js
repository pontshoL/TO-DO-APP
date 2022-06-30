import React from "react"
import '../CSS/displayTask.css'

function DisplayTask(props){
  
    return(
        <div>
         {props.list.map((task)=>(
           <div key={task.id}>
           
               <div className="priority-type">
                  <div><h4 style={{paddingLeft:'12px', paddingTop:'25px'}}>{task.taskName}</h4></div>
                  <div ><h4 style={{paddingLeft:'100px', paddingTop:'25px'}}>{task.taskDate}</h4></div>
                  <div ><h4 style={{paddingLeft:'100px', paddingTop:'25px'}}>{task.taskTime}</h4></div>
                  <div className= {task.taskPriority}></div>
               </div>
            
      
       </div>
         ))}
         
        </div>
    )
}

export default DisplayTask;

