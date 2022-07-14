////////////////Selectors//////////////////////////
let body = document.getElementsByTagName('body')[0]
console.log(body)
let form = document.getElementsByTagName('form')[0]
console.log(form)
let postContainer = document.querySelector("#post-container")
// let button = document.getElementsByTagName('button')[0]
// console.log(button)

////////////////Event Listners//////////////////////
// button.addEventListener('click', () =>{
//   console.log("Inside button eventlistener")
// })

// form.addEventListener('submit', (e) =>{
//   e.preventDefault()
//   const Title = e.target[0].value;
//   const Post = e.target[1].value;
//   const Pseudonym = e.target[2].value;
//   // console.log(title, post, pseudonym);
//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//         title: Title,
//         pseudonym: Pseudonym,
//         post: Post
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   }).then(response => response.json())
//   .then(json => console.log(json));
// })


const getData = async () => {
  const res = await fetch("http://localhost:3002/dogs");
  const searchData = await res.json();
  // console.log(searchData.data[0].pseudonym, "SEARCHDATA")
  items = searchData.data
  // console.log(searchData.data)
  items.forEach((item) =>{
    console.log(item)
    appendPosts(item);
  })

  function appendPosts(item){
    const div_post = document.createElement("div")
    const title = document.createElement("h2")
    const pseudonym = document.createElement("h3")
    const post = document.createElement("p")

    title.textContent = item.title
    pseudonym.textContent = item.pseudonym
    post.textContent = item.post
    
    title.setAttribute("id", "title")
    pseudonym.setAttribute("id", "pseudonym")
    post.setAttribute("id", "post")

    div_post.append(title, pseudonym, post)

    postContainer.append(div_post)




    // const ul = document.querySelector("ul")
    // const newLi1 = document.createElement("li")
    // const newLi2 = document.createElement("li")
    // const newLi3 = document.createElement("li")
  
    // newLi1.textContent = item.title
    // newLi2.textContent = item.post
    // newLi3.textContent = item.pseudonym
  
    // newLi1.setAttribute("id", "title")
    // newLi2.setAttribute("id", "post")
    // newLi3.setAttribute("id", "pseudonym")
  
    // ul.append(newLi1, newLi2, newLi3)
  
    // searchContainer.append(ul)
  
  }
  
}

getData()

// function fetchData(){
//     fetch("mongodb://localhost:27017/doggos")
// }
