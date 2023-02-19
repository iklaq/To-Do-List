// declare empty array for Tasks
let myTasks = [];

//object constructor
function taskDetails(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

// function to add a new Tasks
function addInfoToTasks(title, description, dueDate, priority) {
  const book = new taskDetails(title, description, dueDate, priority);
  myTasks.push(book);

  displayTasksOnPage(myTasks);
}
//initialize new card with task details
function createCard(myTasks, card) {
  const i = myTasks.length - 1;

  for (key in myTasks[i]) {
    const para = document.createElement("p");
    para.classList.add("myPara");
    para.textContent = `${key}: ${myTasks[i][key]}`;
    card.appendChild(para);
  }
}
// add remove button and remove card
function createRemoveButton(card) {
  const removeTaskButton = document.createElement("button");
  removeTaskButton.classList.add("remove-task-button");
  removeTaskButton.textContent = "Remove";
  card.appendChild(removeTaskButton);

  removeTaskButton.addEventListener("click", removeCardFromTasks);
  function removeCardFromTasks() {
    card.remove();
  }
}
// add completed button and change color
function createCompletedButton(card) {
  const addCompletedButton = document.createElement("button");
  addCompletedButton.classList.add("completed-task-button");
  addCompletedButton.textContent = "Completed?";
  card.appendChild(addCompletedButton);

  addCompletedButton.addEventListener("click", changeCompletedStatus);

  function changeCompletedStatus() {
    if (card.style.backgroundColor != "green") {
      card.style.backgroundColor = "green";
    } else {
      card.style.backgroundColor = "red";
    }
  }
}
//for displaying all the task in Tasks
function displayTasksOnPage(myTasks) {
  const tasks = document.querySelector(".tasks");

  const card = document.createElement("div");
  card.classList.add("card");
  tasks.appendChild(card);

  createCard(myTasks, card);

  createRemoveButton(card);

  createCompletedButton(card);
}

// **main
// event listner to dispaly the form when user clicks on add-task-button
const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", displayForm);

function displayForm() {
  document.getElementById("add-task-form").style.display = "";
}
// start eventListner and add input values of form to myTasks
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", submitNewTask);

function submitNewTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  // check input values empty or not
  if (title == "" || description == "" || dueDate == "") {
    return;
  }

  // if input values are correct the add the info in Tasks
  addInfoToTasks(title, description, dueDate, priority);

  clearForm();

  document.getElementById("add-task-form").style.display = "none";
}
// to reset the form
clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);
// function for clear the form
function clearForm() {
  document.getElementById("add-task").reset();
}
