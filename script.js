function newfunction(){
   let item = document.getElementById("input").value
   const ul = document.querySelector("ul")
   ul.innerHTML += `<li> ${item}<button onclick="deleteit(this)">Delete</button>
   <button onclick="updateit()">Update</button></li>`
document.getElementById("input").value=("")

}
function deleteit(getObject){
    console.log(getObject)
    getObject.parentElement.remove()
}





// function updateit (){
// }