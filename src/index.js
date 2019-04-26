import _ from 'lodash'
import './style.css'
import Icon from './pic.svg'

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let myPic = new Image();
    myPic.src = Icon;
    
    element.appendChild(myPic);

    return element;
}

document.body.appendChild(component());