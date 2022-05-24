const form=document.querySelector('form')

form.addEventListener('submit',saveBookmark)

function saveBookmark(e){
    e.preventDefault()
    let siteName=document.getElementById('name').value;
    let siteUrl=document.getElementById('url').value;

    let bookMark={
        name:siteName,
        url:siteUrl
    }
    
    
    if(localStorage.getItem('bookmarks') == null){
        // if there is no item,a new array is created
        let bookmarks=[]
       
        // the input is pushed unto it
        bookmarks.push(bookMark)
       
        // a localstorage is set
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
        
     }
    else{
        // if there is item,we retrieve it
        let bookmarks=JSON.parse(localStorage.getItem('bookmarks'))

        // we push our values into the already existing array
        bookmarks.push(bookMark)
        
        // we set it 
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    }
}

// fetch the bookmarks
function fetchBookmarks(){
    console.log(JSON.parse(localStorage.getItem('bookmarks')))

}