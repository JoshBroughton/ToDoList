let newItemDOM = (projects, priorities) => {
    //create all the elements for inputting the fields to create a new item object
    let textInput = document.createElement("FORM");
    let titleIn = document.createElement("INPUT");
    let descriptionIn = document.createElement("TEXTAREA");
    let dueDateIn = document.createElement("INPUT");
    let projectIn = document.createElement("SELECT");
    let priorityIn = document.createElement("SELECT");
    let submit = document.createElement("BUTTON");
    let cancel = document.createElement("BUTTON");

    textInput.setAttribute("id", "form")
    
    //set basic attributes
    titleIn.setAttribute("type", "text");
    titleIn.setAttribute("id", "titleIn");
    titleIn.setAttribute("name", "titleIn");
    titleIn.setAttribute('placeholder', 'Task Title');
    titleIn.setAttribute('class', 'formInput');

    descriptionIn.setAttribute("type", "text");
    descriptionIn.setAttribute("id", "descriptionIn");
    descriptionIn.setAttribute("name", "descriptionIn");
    descriptionIn.setAttribute('placeholder', 'Description');
    descriptionIn.setAttribute('class', 'formInput');

    dueDateIn.setAttribute("type", "Date");
    dueDateIn.setAttribute("id", "dueDateIn")
    dueDateIn.setAttribute('class', 'formInput');
    dueDateIn.innerText = "Due Date";
    projectIn.setAttribute("type", "button");
    projectIn.setAttribute("id", "projectIn");
    projectIn.setAttribute('class', 'formInput');
    projectIn.innerText = "Project";
    priorityIn.setAttribute("type", "button");
    priorityIn.setAttribute("id", "priorityIn");
    priorityIn.setAttribute('class', 'formInput');
    priorityIn.innerText = "Priority";

    submit.setAttribute("type", "button");
    submit.setAttribute("id", "submit");
    submit.setAttribute('class', 'formInput');
    submit.innerText = "Submit";
    cancel.setAttribute("type", "button");
    cancel.setAttribute("id", "cancel");
    cancel.setAttribute('class', 'formInput');
    cancel.innerText = "Cancel";
    //append all sub items to the div and form
    textInput.appendChild(titleIn);
    textInput.appendChild(descriptionIn);
    textInput.appendChild(dueDateIn);
    textInput.appendChild(projectIn);
    textInput.appendChild(priorityIn);
    textInput.appendChild(submit);
    textInput.appendChild(cancel);

    //add drop down attributes
    for (const project of projects) {
        let option = document.createElement("OPTION");
        option.value = project;
        option.innerText = project;
        projectIn.appendChild(option);
    }

    for (const priority of priorities) {
        let option = document.createElement("OPTION");
        option.value = priority;
        option.innerText = priority;
        priorityIn.appendChild(option);
    }



    return textInput;
}

export default newItemDOM;
