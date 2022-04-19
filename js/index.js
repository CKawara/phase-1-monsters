document.addEventListener("DOMContentLoaded", () => {
    let createForm = document.getElementById('create-monster')
    let form = document.createElement('form')
    let NInput = document.createElement('input')
    let AInput = document.createElement('input')
    let DInput = document.createElement('input')
    let btn = document.createElement('button')

    NInput.placeholder = 'name...'
    AInput.placeholder = 'age...'
    AInput.type = 'number'
    DInput.placeholder = 'description...'
    btn.innerText = 'Create'

    form.appendChild(NInput)
    form.appendChild(AInput)
    form.appendChild(DInput)
    form.appendChild(btn)
    createForm.appendChild(form)

    
})