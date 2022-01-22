let home = () => {
    //define container and grid children
    let container = document.createElement("DIV");
    let header = document.createElement("DIV");
    let sidebar = document.createElement("DIV");
    let subHeader = document.createElement("DIV");
    let content = document.createElement("DIV");
    let footer = document.createElement("DIV");

    container.setAttribute("id", "gridContainer");
    header.setAttribute("id", "header");
    sidebar.setAttribute("id", "sidebar");
    subHeader.setAttribute("id", "subHeader");
    content.setAttribute("id", "content");
    footer.setAttribute("id", "footer");

    //append children to grid container
    container.appendChild(header);
    container.appendChild(sidebar);
    container.appendChild(subHeader);
    container.appendChild(content);
    container.appendChild(footer);

    //define header elements
    let sidebarButton = document.createElement("BUTTON");
    let homeButton = document.createElement("BUTTON");
    let addButton = document.createElement("BUTTON");
    
    sidebarButton.setAttribute("id", "sidebarButton");
    sidebarButton.setAttribute("type", "button");
    sidebarButton.innerText = "Sidebar";
    homeButton.setAttribute("id", "homeButton");
    homeButton.setAttribute("type", "button");
    homeButton.innerText = "Home";
    addButton.setAttribute("id", "addButton");
    addButton.setAttribute("type", "button");
    addButton.innerText = "Add Task";

    //append to header
    header.appendChild(sidebarButton);
    header.appendChild(homeButton);
    header.appendChild(addButton);

    //define sidebar elements
    let onDeckButton = document.createElement("BUTTON");
    
    let projectHeader = document.createElement("H1");



    return container;
}
export default home;