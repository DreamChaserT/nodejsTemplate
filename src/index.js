import _ from 'lodash'
import './style.css'
import Icon from './pic.svg'
import printMe from './print.js'

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let btn = document.createElement('button');
    btn.innerHTML = "Click Me";
    btn.onclick = printMe;

    element.appendChild(btn);

    let myPic = new Image();
    myPic.src = Icon;

    element.appendChild(myPic);

    return element;
}

document.body.appendChild(component());