import newItemDOM from './newItemDOM';
import home from './home';

let loadHome = (() => {
    main = document.getElementById("main");
    main.appendChild(home());
})();

let newItem = () => {
    main = document.getElementById("main");
    main.appendChild(newItemDOM());
}