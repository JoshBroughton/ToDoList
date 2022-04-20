import newItemDOM from './newItemDOM';
import home from './home';
import addItem from './addItem';
import clearInput from './clearInput';
import itemFactory from './item'; 
import './style.css';
import content from './contentDOM';
import sidebarToggle from './sidebarToggle';
import projectListDom from './projectListDom';

const projects = ["Default", "Exercise", "Code"];

let loadHome = () => {
    main = document.getElementById("main");
    //content();
    main.appendChild(home());
    projectListDom(projects);
};
loadHome();
let clearContent = () => {
    let parent = document.getElementById("content");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}
clearContent();
let newItemButtonClick = () => {
    clearContent();
    main = document.getElementById("content");
    main.appendChild(newItemDOM(projects, priorities));
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener('click', addNewItem);
}
//not done
let homeButtonClick = () => {
    clearContent();
    content();
}
let addNewItem = () => {
    let titleIn = document.getElementById('titleIn');
    if (titleIn.value == '') {
        alert('Please enter a title for the task.')
    } else {
        items.push(addItem());
        clearInput();
    }
}

let addButton = document.getElementById("addButton");
addButton.addEventListener('click', newItemButtonClick);

let homeButton = document.getElementById("homeButton");
homeButton.addEventListener('click', homeButtonClick);

let sidebarButton = document.getElementById('sidebarButton');
sidebarButton.addEventListener('click', sidebarToggle);

//list to contain the projects

const priorities = ["Priority 1", "Priority 2", "Priority 3", "Priority 4", "Priority 5"];
const items = [];
//One object/collection should contain the list of projects
//the project that a todo item belongs to should be keyed to the item
//if a project is deleted, the user decides if the subtasks become associated
//with default proejct (staging) or are deleted as well
//a separate collection holds all tasks