let footer = () => {
    //defines the HTML elements that make up the footer of the home page
    let footer = document.createElement("DIV");
    footer.setAttribute("id", "footer");

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

    return footer;
}
export default footer;