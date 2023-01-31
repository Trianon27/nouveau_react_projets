import React, {useState} from "react";
import Task from "./Task";
import "../stylesheets/TaskList.css";
import Forms from "./Forms";



function TaskList (){
    
    const [tasks, setTasks] = useState([]); 
    
    const addTask = (task) => {
        
        if(task.text.trim()){
            task.text = task.text.trim();
            const updateTasks = [task, ...tasks];
            setTasks(updateTasks);
        }
        
    };

    const removeTask = (id) => {
        const updateTasks = tasks.filter((task) => task.id !== id);
        setTasks(updateTasks);
    };

    const completeTask = (id) => {
        const updateTasks = tasks.map((task) => {
            if(task.id === id){
                task.complete = !task.complete;
            }
            return task;
        });
        setTasks(updateTasks);
    };


    return (
        <> 
            <Forms 
                onSubmit={addTask}
            />
            <div className="list-task-container">
                {
                    tasks.map((task) => (   
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            complete={task.complete}
                            removeTask={removeTask}
                            completeTask={completeTask}
                        />
                    ))
                }
            </div>
        </>
    );

};

export default TaskList;