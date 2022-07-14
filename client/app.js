////////////////Selectors//////////////////////////
let body = document.getElementsByTagName('body')[0]
console.log(body)
let form = document.getElementsByTagName('form')[0]
console.log(form)
// let button = document.getElementsByTagName('button')[0]
// console.log(button)

////////////////Event Listners//////////////////////
// button.addEventListener('click', () =>{
//   console.log("Inside button eventlistener")
// })
form.addEventListener('click', (e) =>{
  e.preventDefault()
  console.log(e.target)
})




// function fetchData(){
//     fetch("mongodb://localhost:27017/doggos")
// }
