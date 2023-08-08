let submitBtn = document.querySelector('.btn')
let bookListArr = []
let bookListTable = document.querySelector('#book-list')

window.addEventListener('load', getLocalStorage)
submitBtn.addEventListener('click', function(e){
    bookListGeneratir(e, bookListArr)
    setLocalStorage(bookListArr)
    bookList(bookListArr)

})

function bookListGeneratir(e, arr){
    e.preventDefault()
    let titleInput = document.querySelector('#title')
    let titleInputValue = titleInput.value
    
    let authorInput = document.querySelector('#author')
    let authorInputValue = authorInput.value

    let yearInput = document.querySelector('#year')
    let yearInputValue = yearInput.value
    
    if(titleInputValue == "" || authorInputValue == "" || yearInputValue == ""){
        alert('you should complete all of them')
    }else {
        let bookListObj = {
            title: titleInputValue,
            author: authorInputValue,
            year: yearInputValue
        }
    
        arr.push(bookListObj)
    }
}

function bookList(arr){
    bookListTable.innerHTML = ''

    arr.map(item => {
        bookListTable.innerHTML += `<tr>
                                      <th>${item.title}</th>
                                      <th>${item.author}</th>
                                      <th>${item.year}</th>
                                    </tr>`
    })
}

function setLocalStorage(arr){
    localStorage.setItem('bookList', JSON.stringify(arr))
}

function getLocalStorage(){
    let arr = JSON.parse(localStorage.getItem('bookList'))
    if(arr){
        bookListArr = arr
    }else{
        bookListArr = []
    }

    bookList(bookListArr)
}

