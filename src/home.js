import header from './headerDOM';
import sidebar from './sidebarDOM';

let home = () => {
    //define container and grid children
    let container = document.createElement("DIV");
    
    let subHeader = document.createElement("DIV");
    let content = document.createElement("DIV");
    let footer = document.createElement("DIV");

    container.setAttribute("id", "gridContainer");
    
    subHeader.setAttribute("id", "subHeader");
    content.setAttribute("id", "content");
    footer.setAttribute("id", "footer");

    //append children to grid container
    container.appendChild(header());
    container.appendChild(sidebar());
    container.appendChild(subHeader);
    container.appendChild(content);
    container.appendChild(footer);


    

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