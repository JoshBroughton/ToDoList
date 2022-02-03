import header from './headerDOM';
import sidebar from './sidebarDOM';
import subHeader from './subHeadDOM';
import content from './contentDOM';

let home = () => {
    //define container and grid children
    let container = document.createElement("DIV");
    
    
    
    let footer = document.createElement("DIV");

    container.setAttribute("id", "gridContainer");
    
    
    
    footer.setAttribute("id", "footer");

    //append children to grid container
    container.appendChild(header());
    container.appendChild(sidebar());
    container.appendChild(subHeader());
    container.appendChild(content());
    container.appendChild(footer);


    

    //temporary elements to get css roughed in before working on dynamic project adding
    
    

    

    //rough in footer elements
    let footerStatement = document.createElement("H1");
    let footerButton = document.createElement("BUTTON");

    footerStatement.setAttribute("id", "footerStatement");
    footerStatement.innerText = "Josh Broughton";
    footerButton.setAttribute("id", "footerButton");
    footerButton.setAttribute("type", "button");
    footerButton.innerText = "Github";

    
    
    footer.appendChild(footerStatement);
    footer.appendChild(footerButton);

    return container;
}
export default home;