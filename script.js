// working on the Functionality of the App 

const inputField = document.querySelector(".inputs");
const addTasks = document.querySelector(".addtasks");
const listContainer = document.querySelector(".listcontainer");

addTasks.addEventListener('click',()=>{
    if (inputField.value == '') {
        alert("The field cannot be Empty !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value='';
    saveData();
})

listContainer.addEventListener('click',(e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// To save data in the local storage of the memory

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();