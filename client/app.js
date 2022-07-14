////////////////Selectors//////////////////////////
let body = document.getElementsByTagName('body')[0]
console.log(body)
let form = document.getElementsByTagName('form')[0]
console.log(form)
const postContainer = document.querySelector("#post-container")
// let button = document.getElementsByTagName('button')[0]
// console.log(button)

////////////////Event Listners//////////////////////
// button.addEventListener('click', () =>{
//   console.log("Inside button eventlistener")
// })

form.addEventListener('click', (e) =>{
})

function appendPosts(postData){
  const newLi1 = document.createElement("li")
  const newLi2 = document.createElement("li")
  const newLi3 = document.createElement("li")

  newLi1.textContent = data.title
  newLi2.textContent = data.post
  newLi3.textContent = data.pseudonym

  newLi1.setAttribute("id", "title")
  newLi2.setAttribute("id", "post")
  newLi3.setAttribute("id", "pseudonym")

  UR

  

}


// function fetchData(){
//     fetch("mongodb://localhost:27017/doggos")
// }
