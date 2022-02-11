let sidebar = () => {
    let sidebar = document.createElement("DIV");
    sidebar.setAttribute("id", "sidebar");

    //define sidebar elements
    let onDeckButton = document.createElement("BUTTON");
    let stagingButton = document.createElement("BUTTON");
    let projectHeader = document.createElement("H1");
    //projects will need to be dynamically appended the the header
    onDeckButton.setAttribute("id", "onDeckButton");
    onDeckButton.setAttribute("type", "button");
    onDeckButton.innerText = "On Deck";
    stagingButton.setAttribute("id", "stagingButton");
    stagingButton.setAttribute("type", "button");
    stagingButton.innerText = "Staging";
    projectHeader.setAttribute("id", "projectHeader");
    projectHeader.innerText = "Projects";

    //append to sidebar
    sidebar.appendChild(onDeckButton);
    sidebar.appendChild(stagingButton);
    sidebar.appendChild(projectHeader);

    return sidebar;
}
export default sidebar;