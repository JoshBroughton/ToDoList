let clearInput = () => {
    let titleIn = document.getElementById("titleIn");
    let descriptionIn = document.getElementById("descriptionIn");
    let dueDateIn = document.getElementById("dueDateIn");
    let projectIn = document.getElementById("projectIn");
    let priorityIn = document.getElementById("priorityIn");

    titleIn.value = '';
    descriptionIn.value = '';
    dueDateIn.value = '';
    projectIn.value = 'Default';
    priorityIn.value = 'Priority 1';
}

export default clearInput;