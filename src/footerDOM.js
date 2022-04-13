let footer = () => {
    //defines the HTML elements that make up the footer of the home page
    let footer = document.createElement("DIV");
    footer.setAttribute("id", "footer");

    //rough in footer elements
    
    let footerStatement = document.createElement("H1");
    let footerButton = document.createElement("a");

    footerStatement.setAttribute("id", "footerStatement");
    footerStatement.innerText = "Made By Josh Broughton";
    footerButton.setAttribute("id", "footerButton");
    footerButton.setAttribute("href", "https://github.com/JoshBroughton");

    footer.appendChild(footerStatement);
    footer.appendChild(footerButton);
    

    return footer;
}
export default footer;