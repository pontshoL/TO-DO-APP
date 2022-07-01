import logo from './logo.svg';
import LogIn from './Components/login';
// import AddTask from './Components/AddTask';
// import DisplayTask from './Components/displayTask';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HomePage from './Components/homepage';
import React, {useState, useEffect} from 'react';
import SignUp from './Components/signup'
import './App.css';
import {collection, getDocs} from 'firebase/firestore'

function App() {
  const [listOfTask, setTaskList] = useState([]);
  useEffect( () => {
    console.log('list: ' ,listOfTask)
  }, [listOfTask])
  
  const addTask = ((taskName, taskDate, taskPriority,taskTime)=>{
    setTaskList((task)=> [...task,{
        id:task.length,
        taskName:taskName,
        taskDate:taskDate,
        taskPriority:taskPriority,
        taskTime:taskTime
    }])
  })
  return (

    <Router basename='TO-DO-APP'>
    <Switch>
      <Route exact path="/" component={LogIn}></Route>
      <Route path="/sign-up" component={SignUp}></Route>
      <Route path="/homepage" >  
      <HomePage  list={listOfTask} add={addTask} />
      </Route>
    </Switch>
  </Router>
    // <div className="App">
      
    //   {/* <LogIn /> */}
    //   {/* <AddTask add={addTask}/>
    //   <DisplayTask list={taskList}/> */}
    //   <HomePage  list={listOfTask} add={addTask} />
    // </div>
  );
}

export default App;
