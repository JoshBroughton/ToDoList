import itemFactory from "./item";

let addItem = () => {
    let titleIn = document.getElementById("titleIn");
    let descriptionIn = document.getElementById("descriptionIn");
    let dueDateIn = document.getElementById("dueDateIn");
    let projectIn = document.getElementById("projectIn");
    let priorityIn = document.getElementById("priorityIn");

    let title = titleIn.value;
    let description = descriptionIn.value;
    let dueDate = dueDateIn.value;
    let project = projectIn.value;
    let priority = priorityIn.value;

    const item = itemFactory(title, description, dueDate, priority, project)
    return item;
}

export default addItem;