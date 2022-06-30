import AddTask from '../Components/addTask';
import DisplayTask from '../Components/displayTask';
import '../CSS/displayTask.css';
function HomePage(props){
    return(
        <div className='main'>
            <div>
            <AddTask add={props.add}/>
                
            </div>
            <div>
            <DisplayTask list={props.list}/>
            </div>
           
        </div>
    )
}

export default HomePage;