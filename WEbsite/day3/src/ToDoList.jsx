import React,{useState} from "react";
function TODoList(){
    const [tasks,setTasks] = useState([])

    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
        else{
            alert("please add a task first");
        }
        
    }
    function deleteTask(index){
        const updateTasks = tasks.filter((element,i) => i !== index);
        setTasks(updateTasks);
    }
    
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        else{
            alert("already at top")
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        else{
            alert("Already at bottom")
        }
    }
    return(
        <div className = "to-do-list">

            <h1> To Do List
            </h1>
            <div>
                <input type="text"
                placeholder="Enter a new task...."
                value = {newTask}
                onChange={handleInputChange} />
                <button className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                    onClick={ () => deleteTask(index)}
                    >Delete</button>
                    <button className="down-button"
                    onClick={ () => moveTaskUp(index)}
                    >UP</button>
                    <button className="up-button"
                    onClick={ () => moveTaskDown(index)}
                    >DOWN</button>
                    </li>)}
            </ol>
        </div>
    )
}

export default TODoList;