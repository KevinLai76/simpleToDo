// Find all elements
let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('.content')

// Added a 'submit' event listener to form that points to createLi() passing in the event so that the fn() has access to the data
form.addEventListener('submit', (event) => {
        event.preventDefault()
        if(event.target.firstElementChild.value === ''){
                createErrorMessage()
        } else {
                createLi(event)
                event.target.firstElementChild.value = ''
        }
})
// add or removes 'checked' class to 'Li'
ul.addEventListener('click', (event)=> {
        if(event.target.tagName === 'LI'){
                !!event.target.className ? event.target.className = '' : event.target.className = 'checked'
                console.log(event.target.className)
        } else if(event.target.tagName === 'BUTTON'){
                event.target.parentElement.remove()
        }
})
// Prevents the user from creating Li's with blank strings
function createErrorMessage() {
        let divContainer = document.querySelector('.list-item-container')
        let div = document.createElement('div')
        div.innerText = 'Please enter a list item'
        divContainer.append(div)
        setTimeout(() => {
                divContainer.lastElementChild.remove()        
        }, 2500)
}
// creates Li, with button and event listener on button
function createLi(event){
        let ul = document.querySelector('.content')
        let li = document.createElement('li')
        let inputValue = event.target.firstElementChild.value
        li.innerHTML = `
                ${inputValue}
                <button type='button'>x</button>
        `
        ul.append(li)
}

