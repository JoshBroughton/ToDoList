import newItemDOM from './newItemDOM';
import home from './home';
import homeIcon from './house.png';
import './style.css';

let loadHome = (() => {
    main = document.getElementById("main");
    main.appendChild(home());
})();

let newItem = () => {
    main = document.getElementById("main");
    main.appendChild(newItemDOM());
}