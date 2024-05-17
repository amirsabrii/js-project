

                          //بخش اول

let list = document.querySelector("#to-do-list")
let searchInput = document.querySelectorAll(".to-do-input")[0]
let addInput = document.querySelectorAll(".to-do-input")[1]
let addBtn = document.querySelector('.add-btn')


list.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove()

        if (list.children.length == 0){
            let listEmpyMsg = document.createElement("div");
            listEmpyMsg.style.textAlign = "center";
            listEmpyMsg.style.color = "#333";
            listEmpyMsg.innerText = " <your list is empty>";
            listEmpyMsg.id = "empyMsg";
            list.appendChild(listEmpyMsg)
        }
    }
})


addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(!addInput.value){
        return
    }
    if( document.querySelector('#empyMsg') ){
        document.querySelector('#empyMsg').remove()
    }

    list.append(creatListItem(addInput.value))
    addInput.value = ""
})


function creatListItem(itemValue){
    
    let newLi = document.createElement('li')
    newLi.className = "to-do-item"

    let newSpan = document.createElement('span')
    newSpan.className = 'title'
    newSpan.innerText = itemValue

    let newBtn = document.createElement('button')
    newBtn.className = 'delet-btn'
    newBtn.innerText = "delet"

    newLi.appendChild(newSpan)
    newLi.appendChild(newBtn)

    return newLi

}

searchInput.addEventListener("input" ,(e) => {
    Array.from(list.children).forEach(element => {
        if( document.querySelector('#empyMsg')){
            return
        }

        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
          element.style.display = "flex"
        }else{
            element.style.display = "none"
        }

    })
})


                                // بخش دوم



 let emailregex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

let form = document.querySelector('.form')
let password = document.querySelector('#password')
let passwordVrify = document.querySelector('#passwordVrify')
let email = document.querySelector('#email')
let emailEror = document.querySelector('#email-eror')
let vrifyEror = document.querySelector('#vrify-eror')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let Resultemailregex = emailregex.test(email.value)


    if(!(Resultemailregex)){
        emailEror.innerHTML = ' لطفا ایمل را درست وارد کنید'
    }else{
    emailEror.innerHTML = ""
    }


    if(passwordVrify.value === password.value){
        vrifyEror.innerHTML = ""
    }else{
        vrifyEror.innerHTML = 'رمز نادرست است'
    }
})

let userName = document.querySelector('#userName')

function sendDta(){

    let keysUserName = userName.value
    console.log('userName : ' + keysUserName);
    
    let keysEmeil = email.value
    console.log("email : " + keysEmeil);
    
    let keysPaaword = password.value
    console.log('password : '+ keysPaaword);


}

 