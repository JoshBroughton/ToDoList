import newItemDOM from './newItemDOM';
import home from './home';
import './style.css';

let loadHome = (() => {
    main = document.getElementById("main");
    main.appendChild(home());
})();

let clearContent = () => {
    let parent = document.getElementById("content");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}
let newItem = () => {
    clearContent();
    main = document.getElementById("content");
    main.appendChild(newItemDOM(projects));
}
addButton = document.getElementById("addButton");
addButton.addEventListener('click', newItem);

//list to contain the projects
const projects = ["Default", "Exercise", "Code"];

//One object/collection should contain the list of projects
//the project that a todo item belongs to should be keyed to the item
//if a project is deleted, the user decides if the subtasks become associated
//with default proejct (staging) or are deleted as well
//a separate collection holds all tasks