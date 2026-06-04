let btn = document.getElementById("btn");
let input = document.getElementById("inputBox");
let taskList = document.getElementById("taskList");

btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = input.value;

    taskList.appendChild(li);

    input.value = "";
});