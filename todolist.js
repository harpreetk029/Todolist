document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let input = document.getElementById("todo-input");
    if (input.value.trim() === '') {
    alert('Please enter a task');
    return;
}

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    input.value = "";
}

function displayTasks() {
    let taskList = document.getElementById("todo-taskList");
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${task}`;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
           
            if(confirm ('Are you sure yoy want delete it ?')){
                tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
            } 
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function loadTasks() {
    displayTasks();
}


function loadTasks() {
    checkUserInfo();
    displayTasks();
}
  
  function checkUserInfo(){
    let username = localStorage.getItem("username");
    if (!username) {  
      window.location.href = "logintodo.html";
      return;
  }
    
  let welcomeMsg = document.getElementById("welcome-msg");
    welcomeMsg.textContent = `Welcome  ${username}`
  }
  function logout(){
    document.getElementById("logout-button");
    localStorage.clear();
    window.location.href = "logintodo.html"
  }







