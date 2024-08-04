442111111111111111111111111var addpopupbutton=document.getElementById("add-popup-button")
var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
    
})

var cancelpopup=document.getElementById("cancel")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var containerbook=document.querySelector(".container")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")
var addbook=document.getElementById("add")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletee(event)">delete</button>`
    containerbook.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

function deletee(event){
    event.target.parentElement.remove()
}