let name = "Mary";
let names = ["Mary", "Bob", "Joey"];

btnShowMessage.onclick=function(){
  console.log(`My best friend is ${names[1]}`)
  lblMessage.textContent = "I really enjoy " + names[1]
}
