let projectListDom = (projects) => {
    let projectHeader = document.getElementById('projectHeader');
    for (let i = 0; i < projects.length; i++) {
        let item = document.createElement('BUTTON');
        item.setAttribute('type', 'button');
        item.setAttribute('id', projects[i]);
        projectHeader.append(item);
    }
}
export default projectListDom;