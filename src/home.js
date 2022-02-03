import header from './header';

let home = () => {
    //define container and grid children
    let container = document.createElement("DIV");
    let sidebar = document.createElement("DIV");
    let subHeader = document.createElement("DIV");
    let content = document.createElement("DIV");
    let footer = document.createElement("DIV");

    container.setAttribute("id", "gridContainer");
    sidebar.setAttribute("id", "sidebar");
    subHeader.setAttribute("id", "subHeader");
    content.setAttribute("id", "content");
    footer.setAttribute("id", "footer");

    //append children to grid container
    container.appendChild(header());
    container.appendChild(sidebar);
    container.appendChild(subHeader);
    container.appendChild(content);
    container.appendChild(footer);


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
    projectHeader.innerText = "Projects"

    //append to sidebar
    sidebar.appendChild(onDeckButton);
    sidebar.appendChild(stagingButton);
    sidebar.appendChild(projectHeader);

    //temporary elements to get css roughed in before working on dynamic project adding
    let tempSubHead = document.createElement("H1");
    let tempContent = document.createElement("P");

    tempSubHead.innerText = "SUBHEADER";
    tempContent.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "

    //rough in footer elements
    let footerStatement = document.createElement("H1");
    let footerButton = document.createElement("BUTTON");

    footerStatement.setAttribute("id", "footerStatement");
    footerStatement.innerText = "Josh Broughton";
    footerButton.setAttribute("id", "footerButton");
    footerButton.setAttribute("type", "button");
    footerButton.innerText = "Github";

    subHeader.appendChild(tempSubHead);
    content.appendChild(tempContent);
    footer.appendChild(footerStatement);
    footer.appendChild(footerButton);

    return container;
}
export default home;