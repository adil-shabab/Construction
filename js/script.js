menuBar = document.querySelector('.bar')
searchBtn = document.querySelector('.search-btn')
searchForm = document.querySelector('.search-form')
infoBtn = document.querySelector('.info')
infoSection = document.querySelector('.info-section')
navBar = document.querySelector('.navbar-nav')
closeBtn = document.querySelector('.close')




// menu bar js 
function showMenu(){
    navBar.classList.toggle("active")
    searchForm.classList.remove("active")
    infoSection.classList.remove("active")
}
menuBar.addEventListener("click", showMenu)
// menu bar js 


// search js 
function showSearchBox(){
    searchForm.classList.toggle("active")
    infoSection.classList.remove("active")
    navBar.classList.remove("active")
}
searchBtn.addEventListener("click", showSearchBox)
// search js


// info js 
function showInfo(){
    infoSection.classList.toggle("active")
    searchForm.classList.remove("active")
    navBar.classList.remove("active")
}
infoBtn.addEventListener('click', showInfo)
// info js 


// close info 
function closeInfo(){
    infoSection.classList.remove("active")
}
closeBtn.addEventListener("click", closeInfo)
// close info 