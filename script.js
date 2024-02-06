
const btn = document.querySelector('button');
const main = document.querySelector('.main');
const input = document.querySelector('input')
const copy = document.querySelector(".input-icon i");


btn.addEventListener('click',()=>
{
  const length = 12;
  const charset = 'qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_+=-?"'
  let password = "";
  
  for(i=0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  input.value = password;
});
window.addEventListener('beforeunload',()=>{
  input.value = "";
})

copy.addEventListener('click', ()=>{
  const passwordValue = input.value;
  input.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
})