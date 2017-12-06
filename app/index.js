import './style.scss'

function component() {
    var element = document.createElement('div')

    element.innerHTML = 'hai ^_^'

    return element
}

document.body.appendChild(component())
