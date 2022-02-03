import header from './headerDOM';
import sidebar from './sidebarDOM';
import subHeader from './subHeadDOM';
import content from './contentDOM';
import footer from './footerDOM';

let home = () => {
    //define container and grid children
    let container = document.createElement("DIV");
    
    
    
    

    container.setAttribute("id", "gridContainer");
    
    
    
    

    //append children to grid container
    container.appendChild(header());
    container.appendChild(sidebar());
    container.appendChild(subHeader());
    container.appendChild(content());
    container.appendChild(footer());


    

    //temporary elements to get css roughed in before working on dynamic project adding
    
    

    

    

    return container;
}
export default home;