let sidebarToggle = () => {
    let sidebar = document.getElementById("sidebar");
    let style = window.getComputedStyle(sidebar);
    let width = style.getPropertyValue('width');
    if (width == '400px') {
        sidebar.style.width = '0px';
    } else {
        sidebar.style.width = '400px';
    }
}
export default sidebarToggle;