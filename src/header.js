let header = () => {
    let header = document.createElement("DIV");
    header.setAttribute("id", "header");

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

    return header;
}
export default header;