const myForm = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.getElementsByClassName('msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

 function onSubmit(e) {
     e.preventDefault();

     if(nameInput.value === '' || emailInput.value === '') {
         msg.classList.add('error');
         msg.innerHTML = 'Please enter all fields';

         setTimeout(() => msg.remove(), 3000);
     } else {
         const li = document.createElement('li');
         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userlist.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
     }
 }

 
