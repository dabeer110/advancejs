function newfunction(){
   let item = document.getElementById("input").value
   const ul = document.querySelector("ul")
   ul.innerHTML += `<div><li> ${item}</li>
   <button onclick="deleteit(this)">Delete</button>
   <button onclick="updateit(this)">Update</button>
   </div>`
document.getElementById("input").value=("")

}
function deleteit(getObject){
    console.log(getObject)
    getObject.parentElement.remove()
}
function updateit(getobject){
    getobject.parentElement.children[0].setAttribute("contentEditable",true)
}





// function updateit (){
// }
