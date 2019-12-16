let body = document.querySelector('body')
let form = document.querySelector('form')
let input = document.querySelector('input')

form.addEventListener('submit', (event) => {
        event.preventDefault()
        createLi(event)
        event.target.firstElementChild.value = ''
})

function createLi(event){
        let ul = document.querySelector('.content')
        let li = document.createElement('li')
        let inputValue = event.target.firstElementChild.value
        li.innerHTML= `
                <p>${inputValue}<p>
        `
        ul.append(li)
        console.log(ul)
}

