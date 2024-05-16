function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDescription = taskInput.value.trim();
    if (taskDescription !== "") {
      var taskList = document.getElementById("taskList");
      var listItem = document.createElement("li");
      listItem.className = "taskItem";
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", handleCheckboxChange); 
      var textNode = document.createTextNode(taskDescription);
      listItem.appendChild(checkbox);
      listItem.appendChild(textNode);
      var deleteButton = document.createElement("button"); 
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        listItem.remove(); 
        saveTasksToLocalStorage(); 
      });
      taskList.appendChild(listItem);

      listItem.appendChild(deleteButton); 

      taskInput.value = "";
      saveTasksToLocalStorage(); 
    }
  }


  function saveTasksToLocalStorage() {
    var tasks = [];
    var taskItems = document.getElementsByClassName("taskItem");
    for (var i = 0; i < taskItems.length; i++) {
      var task = {
        description: taskItems[i].textContent,
        completed: taskItems[i].querySelector("input[type='checkbox']").checked
      };
      tasks.push(task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }


  function handleCheckboxChange() {
    saveTasksToLocalStorage();
  }

  var taskList = document.getElementById("taskList");
  taskList.addEventListener("change", handleCheckboxChange);

  window.onload = function() {
    loadTasksFromLocalStorage();
  };

function loadTasksFromLocalStorage() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("taskList");
    
    taskList.innerHTML = "";
  
    tasks.forEach(function(task) {
      var listItem = document.createElement("li");
      listItem.className = "taskItem";
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", handleCheckboxChange);
      listItem.appendChild(checkbox);
      var textNode = document.createTextNode(task.description);
      listItem.appendChild(textNode);
      var deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
        listItem.remove(); 
        saveTasksToLocalStorage(); 
      });
      listItem.appendChild(deleteButton); 
      taskList.appendChild(listItem);
    });
  }
