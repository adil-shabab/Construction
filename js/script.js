menuBar = document.querySelector('.bar')
searchBtn = document.querySelector('.search-btn')
searchForm = document.querySelector('.search-form')
infoBtn = document.querySelector('.info')




// search js 
function showSearchBox(){
    searchForm.classList.toggle("active")
}
searchBtn.addEventListener("click", showSearchBox)
// search js


// info js 
function showInfo(){
    
}
infoBtn.addEventListener('click', showInfo)
// info js 
