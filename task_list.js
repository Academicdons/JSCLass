"use strict";

$(document).ready( () => {
    const tasks = [];

    $("#add_task").click( () => {   
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to array
            // split new tasks in individual tasks
            var newTasks = task.split(',');

            //remove whitespaces from both ends of each task
            newTasks = newTasks.map(task=>task.trim());

            //if a task is empty, remove it from the array.
            newTasks = newTasks.filter(t=>t.length > 0);

             // sort and create tasks string
            newTasks.sort(); 

            // joins the new strings in a new line
            var tasks_list = newTasks.join("\n"); 
            
            // save the changes 
            tasks.push(tasks_list);

            // clear task text box and re-display tasks
            textbox.val("");
            $("#task_list").val(tasks.join("\n"));
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        tasks.length = 0;
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    $("#task").focus();
});