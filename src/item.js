let itemFactory = (itemTitle, itemDescription, itemDueDate, itemPriority, itemProject = "Default") => {
    let title = itemTitle;
    let description = itemDescription;
    let dueDate = itemDueDate;
    let priority = itemPriority;
    let project = itemProject;
    //setters for editing tasks
    let setTitle = (newTitle) => title = newTitle;
    let setDescription = (newDescription) => description = newDescription;
    let setDueDate = (newDueDate) => dueDate = newDueDate;
    let setPriority = (newPriority) => priority = newPriority;
    let setProject = (newProject) => project = newProject;

    return {title, description, dueDate, priority, project, 
        setTitle, setDescription, setDueDate, setPriority, setPriority, setProject}
}
export default itemFactory;