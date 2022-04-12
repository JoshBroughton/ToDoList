let sidebarToggle = () => {
    let sidebar = document.getElementById("sidebar");
    let style = window.getComputedStyle(sidebar);
    let width = style.getPropertyValue('width');
    let main = document.getElementById('main');
    
    if (width == '400px') {
        sidebar.style.width = '0px';
        main.style.marginLeft = '0px';

    } else {
        sidebar.style.width = '400px';
        main.style.marginLeft = '400px';
    }
}
export default sidebarToggle;