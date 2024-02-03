const input = document.querySelector("input");
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{

  const length = 12
  let password = "";
  const charSet = 'qwertyuiopasdfghjklzxcvbnm1234567890~`!@#$%^&*()-_=+:;/.<>'
  for(i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  input.value = password;
})
window.addEventListener('beforeunload',()=>{
  input.value = "";
})