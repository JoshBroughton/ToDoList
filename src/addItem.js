let addItem = () => {
    let titleIn = document.getElementById("titleIn");
    let descriptionIn = document.getElementById("descriptionIn");
    let dueDateIn = document.getElementById("dueDateIn");
    let projectIn = document.getElementById("projectIn");
    let priorityIn = document.getElementById("priorityIn");

    let title = titleIn.innerText;
    let description = descriptionIn.innerText;
    //how are these values saved? depends how the drop down stores them
    let dueDate = dueDateIn.innerText;
    let proejct = projectIn.innerText;
    let priority = priorityIn.innerText;

}

export default addItem;