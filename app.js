console.log('This is Random Password Generator');

const btnElem = document.getElementById('btn');
btnElem.addEventListener('click', ()=>{
    createPassword();
});

const inputElem = document.getElementById('input');


const copyElem = document.querySelector('.fa-copy');


const alertContainer = document.querySelector('.alert-container');

const clearBtn = document.getElementById('clearBtn');
console.log(clearBtn);

clearBtn.addEventListener('click', ()=>{
    clear();
})


copyElem.addEventListener('click', ()=>{
    copyPassword();
    if(inputElem.value){
    alertContainer.classList.remove('active');
    setTimeout(() => {
    alertContainer.classList.add('active');
    }, 2000);
}
} )


function createPassword() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * characters.length)
        password += characters.substring(randomNum, randomNum + 1);
        // console.log(randomNum, password);
    }
    inputElem.value = password;
    alertContainer.innerText = password +  '------- Copied';
};


function copyPassword() {
    inputElem.select();
    inputElem.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputElem.value);
};


function clear() {
    inputElem.value = "";
}