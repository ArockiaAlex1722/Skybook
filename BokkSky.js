// selecting popop box popop overly button
var popopoverly=document.querySelector(".popop-overly")
var popopbox = document.querySelector(".popop-box")
var addpopopbutton=document.getElementById("add-popop-btn")


addpopopbutton.addEventListener("click",function(){
    popopoverly.style.display="block"
    popopbox.style.display="block"
})

//select cancel btn
var cancelbutton = document.getElementById("cancel-popop")
cancelbutton. addEventListener("click",function(event){
    event.preventDefault()
      popopoverly.style.display="none"
    popopbox.style.display="none"
})


// select containar add book ,book-titel-input,book-author-input,book-description-input

var containar = document.querySelector(".contaniner")
var addbook = document. getElementById("add-book")
var booktitelinput = document.getElementById("book-titel-input")
var bookautorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-contaniner")
    div.innerHTML=` <h2>${booktitelinput.value}</h2>
            <h5>${bookautorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletbook(event)">Delet</button>`
    containar.append(div)
    popopoverly.style.display="none"
    popopbox.style.display="none"

})

function deletbook(event){
    event.target.parentElement.remove()
}


