let itemFactory = (title, description, dueDate, priority, project = "none") => {
    let title = title;
    let description = description;
    let dueDate = dueDate;
    let priority = priority;
    let project = project;
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