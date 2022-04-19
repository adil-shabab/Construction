menuBar = document.querySelector('.bar')
searchBtn = document.querySelector('.search-btn')
searchForm = document.querySelector('.search-form')
infoBtn = document.querySelector('.info')
infoSection = document.querySelector('.info-section')




// search js 
function showSearchBox(){
    searchForm.classList.toggle("active")
    infoSection.classList.remove("active")

}
searchBtn.addEventListener("click", showSearchBox)
// search js


// info js 
function showInfo(){
    infoSection.classList.toggle("active")
    searchForm.classList.remove("active")
}
infoBtn.addEventListener('click', showInfo)
// info js 
