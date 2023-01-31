import React, {useState} from "react";
import "../stylesheets/Forms.css";
import { v4 as uuidv4 } from 'uuid';

function Forms(props)  { 

    const [input, setInput] = useState('');

    const manageChange = (e) => {
        setInput(e.target.value);
    };
    
    const manageTask = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        };

        props.onSubmit(newTask);
       
    };

    return(
       <form 
       className="task-form"
       onSubmit={manageTask}>
            <input 
                className="task-input"
                type="text"
                placeholder="Add a task"
                name="text"
                onChange={manageChange}
            />
            <button className="task-button">
                Add task
            </button>
       </form>
    );
}

export default Forms;
