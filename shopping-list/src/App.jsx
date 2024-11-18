// Step 4. Import React and useState
import React, { useState } from 'react';

// Step 5. Import the App.css file
import './App.css';
// Step 6. Create a functional component called App
export default function App() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim()){
            setTasks([...tasks, inputValue])
            setInputValue('')
        }
    }
    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    };
    return (
        <div className='list'>
            <h1>Shopping List</h1>
            <div className='input'>
                <input
                    type ='text'
                    value = {inputValue}
                    onChange = {handleInputChange}
                    placeholder = 'Enter an item'
                    />
                    <button onClick={handleAddTask}> Add </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key ={index} className= 'task-item'>
                            {task}
                            <div class="task-action">
                                <button onCLick={() => handleDeleteTask(index)}>Delete</button>
                                </div>    
                </li>
                ))}
            </ul>
        </div>
    );



    

}
    // Step 8a. Initialize useState state variables

    
    // Step 8b. Create arrow function 'handleInputChange to store the current user input
   
    
    // Step 9. Create arrow function 'handleAddTask' to add tasks to the list
    

    // Step 11. Create arrow function 'handleDeleteTask' with parameter 'index' to delete tasks
   
        // Step 11a. Create a new list of items to keep

        // Step 11b. Set the list to our new list

    // Step 7. Return the JSX for the App component

        // Step 7a. Create a div with className 'list' and create a site header
        
            {/* Step 7b. Create a div with className 'text' and create an input field with:
            type 'text' 
            value inputValue
            onChange set to handleInputChange
            placeholder to any placeholder text
            */}
           
           
            {/* Step 10. Display the shopping list array */}
            
            
                {/* Step 10a. Iterate over every task and retrieve its index*/}
                



