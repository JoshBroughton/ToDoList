import newItemDOM from './newItemDOM';

let newItem = () => {
    main = document.getElementById("main");
    main.appendChild(newItemDOM());
}

newItem();