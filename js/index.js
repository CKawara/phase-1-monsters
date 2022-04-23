document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById('monster_container')
    let createForm = document.getElementById('create_monster')
    let form = document.createElement('form')
    let NInput = document.createElement('input')
    let AInput = document.createElement('input')
    let DInput = document.createElement('input')
    let btn = document.createElement('button')
    let back = document.createElement('button')
    let next = document.createElement('button')

    NInput.placeholder = 'name...'
    AInput.placeholder = 'age...'
    AInput.type = 'number'
    DInput.placeholder = 'description...'
    btn.innerText = 'Create'
    back.innerText = '<='
    next.innerText = '=>'

    form.appendChild(NInput)
    form.appendChild(AInput)
    form.appendChild(DInput)
    form.appendChild(btn)
    createForm.appendChild(form)
    createForm.appendChild(back)
    createForm.appendChild(next)

    let page = 1
   function monsters(page){
    fetch(`http://localhost:3000/monsters?_limit=50&_page=${page}`)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(data => {
            showMonsters(data)
        })
    })
   }

   back.addEventListener('click', () =>{
       if(page > 1){
        container.innerHTML=""
        monsters(page--)
       }
   })
   next.addEventListener('click', ()=>{
       container.innerHTML = ''
       monsters(page++)
   })
   form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let formData={
        name:NInput.value,
        age: parseInt(AInput.value),
        description:DInput.value
    }
    addMonster(formData)
   })

   function addMonster(data){
        fetch('http://localhost:3000/monsters',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => data)
    }
    
    
    function showMonsters(data){
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let pAge = document.createElement('p')
        let pDesc = document.createElement('p')

        h2.innerText = data.name
        pAge.innerText =`${data.age} yrs old`
        pDesc.innerText = data.description

        div.appendChild(h2)
        div.appendChild(pAge)
        div.appendChild(pDesc)
        container.appendChild(div)
    }
})