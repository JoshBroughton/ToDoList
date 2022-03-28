let sidebarToggle = () => {
    let sidebar = document.getElementById("sidebar");
    let style = window.getComputedStyle(sidebar);
    let width = style.getPropertyValue('width');
    let container = document.getElementById('gridContainer');
    
    if (width == '400px') {
        sidebar.style.width = '0px';
        container.style.gridTemplateColumns = '0px auto';

    } else {
        sidebar.style.width = '400px';
        container.style.gridTemplateColumns = '400px auto';
    }
}
export default sidebarToggle;