function addTask(){
   var taskInput = document.getElementById('taskInput');
   var taskList = document.getElementById('taskList');
   var list = document.createElement('li');
   list.textContent = taskInput.value; //you are taking input into list
   taskList.appendChild(list);
   
   taskInput.value='';
   
   //This assignment statement sets the value of the input field to an empty string, effectively clearing any text that was previously entered.


};