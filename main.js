let body = document.querySelector('body')
let form = document.querySelector('form')
let input = document.querySelector('input')

form.addEventListener('submit', (event)=>{
    if(event.target.type === 'submit'){
        event.preventDefault()
        debugger;
    } else if (event.target.type === 'text') {
        console.log('you clicked on the input')
    }
})

