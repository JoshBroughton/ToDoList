let newItemDOM = () => {
    //create all the elements for inputting the fields to create a new item object
    let textInput = document.createElement("FORM");
    let titleIn = document.createElement("INPUT");
    let descriptionIn = document.createElement("TEXTAREA");
    let dueDateIn = document.createElement("BUTTON");
    let projectIn = document.createElement("BUTTON");
    let priorityIn = document.createElement("BUTTON");
    let submit = document.createElement("BUTTON");
    let cancel = document.createElement("BUTTON");

    textInput.setAttribute("id", "form")
    
    //set basic attributes
    titleIn.setAttribute("type", "text");
    titleIn.setAttribute("id", "titleIn");
    titleIn.setAttribute("name", "titleIn");
    titleIn.setAttribute("placeholder", 'Task Title');

    descriptionIn.setAttribute("type", "text");
    descriptionIn.setAttribute("id", "descriptionIn");
    descriptionIn.setAttribute("name", "descriptionIn");
    descriptionIn.setAttribute('placeholder', 'Description');

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
    textInput.appendChild(titleIn);
    textInput.appendChild(descriptionIn);
    textInput.appendChild(dueDateIn);
    textInput.appendChild(projectIn);
    textInput.appendChild(priorityIn);
    textInput.appendChild(submit);
    textInput.appendChild(cancel);

    return textInput;
}

export default newItemDOM;
