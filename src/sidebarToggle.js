let sidebarToggle = () => {
    let sidebar = document.getElementById("sidebar");
    let style = window.getComputedStyle(sidebar);
    let vis = style.getPropertyValue('visibility');
    
    if (vis == 'hidden') {
        sidebar.style.visibility = 'visible';

    } else {
        sidebar.style.visibility = 'hidden';
    }

}
export default sidebarToggle;