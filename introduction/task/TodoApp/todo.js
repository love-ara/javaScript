var taskList = document.getElementById("taskList");
const inputBox = document.getElementById("input-box");


function addTask() {
    if (inputBox.value !== "") {
      var li = document.createElement("li");
      li.innerHTML = inputBox.value;
      taskList.appendChild(li);
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", handleCheckboxChange); 
      // var textNode = document.createTextNode(taskDescription);
      li.appendChild(checkbox);
      // listItem.appendChild(textNode);
      var span = document.createElement("SPAN"); 
      span.innerHTML = "\u00d7"
      li.appendChild(span); 
    }
      inputBox.value = "";
      saveTasksToLocalStorage(); 
    
  }

  taskList.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
      e.target.classList.toggle("checked");
      saveTasksToLocalStorage();
    }else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveTasksToLocalStorage();
    }
  }, false);


  function saveTasksToLocalStorage() {
    localStorage.setItem("data", taskList.innerHTML);
  }

  function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
  }

  showTask();

  var taskList = document.getElementById("taskList");
  taskList.addEventListener("change", handleCheckboxChange);


