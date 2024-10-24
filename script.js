import formelements from './form.js'
const form =document.querySelector('#form')
const formContent =document.querySelector('#formContent')

const errorMessage= (element,message)=>{
    const parent=element.parentElement.parentElement
    element.classList.add('border-red-500')
    parent.classList.add('text-red-500')
    parent.insertAdjacentHTML('beforeend',`<p class="text-[13px] mt-[5px]">${message}</p>`)
}

const removeMessage=()=>{
  for(let element of form.elements){
    const parent=element.parentElement.parentElement
    element.classList.remove('border-red-500')
    parent.classList.remove('text-red-500')
    parent.querySelector('p')?.remove()
  }
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<label>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
const handleSubmit=(values)=>{

}

const formElement =(el)=>{
    let className =` w-full p-[8px] outline-none h-[40px] border rounded-[5px]`
    if(el.type === 'text' || el.type === 'password'){
        let html = `<div class="flex space-x-2">`
        html += ` <input 
     class="${className}" 
     type="${el.type}"
     name="${el.name}">`

     if(el.type === 'password'){
        html += `
        <button type="button" class="js-show-password">
        Goster
        </button>
        `
     }

     html += `</div>`
     return html;
    }
    else if(el.type === 'select'){
        let html = `<select name="${el.name}" class="${className}">`
        html += `<option value="">Sec</option>`
        for(let option of el.options){
            html += `<option value="${option.value}">${option.label}</option>`
        }
        html += `</select`
        return html;
    }
    else if(el.type === 'checkbox'){
        let html =''
        for(let checkbox of el.options){
            html += `
            <label>
            <input name="${el.name}" type="checkbox" value = "${checkbox.value}">
            <span>${checkbox.label}</span>
            </label>
            `
        }
        return html;
    }
  
}

const formGroup=(el)=>{
    return `
        <div class="">
            <label class="block font-bold mb-[3px]">${el.label}</label>
            ${formElement(el)}
        </div>
      `
}


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const elements =e.target.elements

    removeMessage()
    
    let error =0
    let object={}
    for(let element of elements){
        if(element.tagName !== 'BUTTON'){
            const value=element.value.trim()
            const name=element.name
             
             let findElement=''
             for(let el of formelements){
                if(el.name === name){
                    findElement = el
                }
             }  

            if(findElement){

                const required=findElement?.errors?.required
                const email=findElement?.errors?.email
                const password=form.querySelector('[name="password"]')
                const some=findElement?.errors?.some
                const max=findElement?.errors?.max
                const min=findElement?.errors?.min
           
                object[name]=value
    
                if(required && !value){
                    errorMessage(element,required === 'true' ? 'Please enter password' : required)
                    error++;
                }
                else if(email && !validateEmail(value)){
                    errorMessage(element,email)
                    error++;
                }
                else if(some && password.value !== value){
                    errorMessage(element,'Passwords are not the same')
                    error++;
                }
                else if(max && value.length > parseInt(max)){
                    errorMessage(element,'Must be a maximum of 10 characters')
                    error++;
                }
                else if(min && value.length < parseInt(min)){
                    errorMessage(element,'Must be a minimum of 5 characters')
                    error++;
                }
            }
        }
    }
    if(!error){
      handleSubmit(object)
    }
   
})

for(let el of formelements){
    formContent.innerHTML += formGroup(el)
}

for(let btn of document.querySelectorAll('.js-show-password')){
    btn.addEventListener('click',(e)=>{
   const input = e.target.parentElement.querySelector('input')
      if(input.type === 'password'){
        input.type = 'text'
        e.target.innerHTML = 'Gizlet'
      }
      else{
        input.type = 'password'
        e.target.innerHTML = 'Goster'
      }
    })
}

