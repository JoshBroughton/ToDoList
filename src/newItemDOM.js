let newItemDOM = (title = "", description = "", dueDate = "", priority = "", project = "none") => {
    //create all the elements for inputting the fields to create a new item object
    let textInput = document.createElement("FORM");
    let titleLabel = document.createElement("LABEL");
    let titleIn = document.createElement("INPUT");
    let descriptionLabel = document.createElement("LABEL");
    let descriptionIn = document.createElement("TEXTAREA");
    let dueDateIn = document.createElement("BUTTON");
    let projectIn = document.createElement("BUTTON");
    let priorityIn = document.createElement("BUTTON");
    let submit = document.createElement("BUTTON");
    let cancel = document.createElement("BUTTON");

    textInput.setAttribute("id", "")
    
    //set basic attributes
    titleLabel.setAttribute("for", "title");
    titleLabel.innerText = "Task Title";
    titleIn.setAttribute("type", "text");
    titleIn.setAttribute("id", "titleIn");
    titleIn.setAttribute("name", "titleIn");

    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerText = "Description";
    descriptionIn.setAttribute("type", "text");
    descriptionIn.setAttribute("id", "descriptionIn");
    descriptionIn.setAttribute("name", "descriptionIn");

    dueDateIn.setAttribute("type", "button");
    dueDateIn.setAttribute("id", "dueDateIn")
    dueDateIn.innerText = "Due Date";
    projectIn.setAttribute("type", "button");
    projectIn.setAttribute("id", "projectIn");
    projectIn.innerText = "Project";
    priorityIn.setAttribute("type", "button");
    priorityIn.setAttribute("id", "priorityIn");
    priorityIn.innerText = "Priority";

    submit.setAttribute("type", "button");
    submit.setAttribute("id", "submit");
    submit.innerText = "Submit";
    cancel.setAttribute("type", "button");
    cancel.setAttribute("id", "cancel");
    cancel.innerText = "Cancel";
    //append all sub items to the div and form
    textInput.appendChild(titleLabel);
    textInput.appendChild(titleIn);
    textInput.appendChild(descriptionLabel);
    textInput.appendChild(descriptionIn);
    textInput.appendChild(dueDateIn);
    textInput.appendChild(projectIn);
    textInput.appendChild(priorityIn);
    textInput.appendChild(submit);
    textInput.appendChild(cancel);

    return textInput;
}

export default newItemDOM;
