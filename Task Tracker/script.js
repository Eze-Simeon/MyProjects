const addTaskDiv = document.querySelector(".add-task"),
    plusIcon = document.querySelector(".fa-plus"),
    closeIcon = document.querySelector(".fa-times"),
    taskFormDiv = document.querySelector(".task-form"),
    taskForm = document.querySelector("form"),
    tasksEl = document.querySelector(".tasks"),
    totalTask = document.querySelector(".total-task");
    

const taskDate = document.getElementById("task-date"),
    taskText = document.getElementById("task-text"),
    addTaskBtn = document.getElementById("task-btn"),
    clearBtn = document.getElementById("clear-btn");


    addTaskDiv.addEventListener("click", formDisplay);

    function formDisplay(e){
        if (e.target.classList.contains("fa-plus")) {
            // taskFormDiv.style.top = "0";
            // plusIcon.style.display = "none";
            // closeIcon.style.display = "block";
            showForm();
        }
        if (e.target.classList.contains("fa-times")) {
            // taskFormDiv.style.top = "-100%";
            // closeIcon.style.display = "none";
            // plusIcon.style.display = "block";
            // taskForm.reset();
            hideForm();
            
        }
    }
        // hide the form
        function showForm(){
            taskFormDiv.style.top = "0";
            plusIcon.style.display = "none";
            closeIcon.style.display = "block";
        }

        // show the form
        function hideForm(){
            taskFormDiv.style.top = "-100%";
            closeIcon.style.display = "none";
            plusIcon.style.display = "block";
            taskForm.reset();
        }

        // Get Task from Local Storage
        function getTasks() {
            let tasks = localStorage.getItem("tasks");
            if (tasks === null) {
                tasksObj = []
            }else{
                tasksObj = JSON.parse(tasks);
            }
        }


        addTaskBtn.addEventListener("click", (e) =>{
            e.preventDefault();

            // Validate input
            if (taskDate.value == "" || taskText.value == "") {
                return alert ("please add task date and text!!!");
            }

            // Get Tasks from Local Storage
            getTasks();

            let myObj = {
                date: taskDate.value,
                text: taskText.value,
                completed: false
            }

            tasksObj.push(myObj);

            // Save to Local Storage
            localStorage.setItem("tasks", JSON.stringify(tasksObj));

            //Show task on the page
            showTasks();
            hideForm();
        });

        // show task Function
    function showTasks() {
        tasksEl.innerHTML = "";
        getTasks();
        // console.log(tasksObj.length);
        if (tasksObj.length == 0) {
            tasksEl.innerHTML = "<p>No task added. Please add a task. </p>";
        }
        // console.log(tasksObj);

        tasksObj.forEach(function (task, index) {
            let taskItem = document.createElement("div");
            let taskContent = document.createElement("div");
            let taskIcons = document.createElement("div");
            taskItem.classList.add("task");
            taskContent.classList.add("task-content");
            taskIcons.classList.add("task-icons");
        
            taskContent.innerHTML = `
                <p class="task-date">${task.date}</p>
                <span class="task-index">${index + 1}</span>
                <p class="task-text">${task.text}</p>
                <p class="hidden">${task.completed}</p>
                `;
            taskIcons.innerHTML = `
                <i class="fas fa-check" id="${index}" onclick="completeTask(this.id)"></i>
            
                <i class="fas fa-edit" id="${index}" onclick="editTask(this.id)"></i>
            
                <i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>
                `;
        
            taskItem.appendChild(taskContent);
            taskItem.appendChild(taskIcons);
        
            if (tasksObj.length != 0) {
                tasksEl.appendChild(taskItem);
                console.log(tasksEl.childElementCount);
                console.log(taskItem.firstChild.children[3].innerText);
                const taskStatus = taskItem.firstChild.children[3].innerText;
            
                if (taskStatus == "true") {
                    taskItem.classList.add("completed");
                }
            }
        });
            
            //show total number of tasks
            tasksObj.length > 1  
                ? (totalTask.innerHTML = `${tasksObj.length} Tasks`)
                : (totalTask.innerHTML = `${tasksObj.length} Task`);
                
    }

        // Delete a task
        function deleteTask(index){
            deleteThisTask.trigger(confirmDelete)
            
            function confirmDelete() {
                getTasks();
                tasksObj.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(tasksObj));
                showTasks();
            }
            // const confirmDel = confirm("Delete this task?");
            // if (confirmDel == true) {
            //     getTasks();
            //     tasksObj.splice(index, 1)
            //     localStorage.setItem("tasks", JSON.stringify(tasksObj));
            //     showTasks();
            // }
        }

        // Delete all tasks
        clearBtn.addEventListener("click", () =>{
            deleteAllTasks.trigger(deleteAll)

            function deleteAll() {
                localStorage.clear();
                showTasks();
            }

            // const confirmDel = confirm("Delete all tasks?");
            // if (confirmDel == true) {
            //     localStorage.clear();
            //     showTasks();
            // }
                
        });

        //Edit a task
        function editTask(index){
            taskForm.reset()
            showForm();
            getTasks();

            // console.log(tasksObj[index].text);
            // console.log(tasksObj[index].date);
            console.log(tasksObj[index]);
            console.log(tasksObj);

            taskDate.value = tasksObj[index].date;
            taskText.value = tasksObj[index].text;
            taskText.focus()
            tasksObj.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(tasksObj));
            showTasks();
        }

        // Set a task to completed
        function completeTask(index) {
            tasksEl.addEventListener("click", (e) =>{
                if(e.target.classList.contains("fa-check")){
                    getTasks();
                    tasksObj[index].completed = true;
                    localStorage.setItem("tasks" , JSON.stringify(tasksObj));
                    showTasks();
                }
            })
        }


        showTasks();


        
    