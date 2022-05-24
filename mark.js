const form=document.querySelector('form')

form.addEventListener('submit',saveBookmark)

function saveBookmark(e){
    e.preventDefault()

    let siteName=document.getElementById('name').value;
    let siteUrl=document.getElementById('url').value;

    if(!siteName || !siteUrl){
        alert('empty')
        return false;
    }
    

    let bookMark={
        site:siteName,
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
    fetchBookmarks()
    // clearInput() 
    document.querySelector('form').reset()   
}

// delete bookmark
function deleteMark(url){
    let bookmarks=JSON.parse(localStorage.getItem('bookmarks'))

    bookmarks.forEach((mark,i)=>{
        if(mark.url===url){
            bookmarks.splice(i,1)
        }
    })
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))

    fetchBookmarks()
}

// fetch the bookmarks
function fetchBookmarks(){
    let bookmarks=JSON.parse(localStorage.getItem('bookmarks'))

    let result=document.querySelector('.second')
    result.innerHTML=''

    bookmarks.forEach(mark=>{
        result.innerHTML+=`
        <article class="sites">
                <h3>${mark.site}</h3>

                <a class="visit" target="_blank" href="http://${mark.url}">visit</a>

                <a onclick="deleteMark('${mark.url}')" class="delete" href="#">delete</a>
            </article>     
            `
    })

}

function clearInput(){
    document.getElementById('name').value=' ';
    document.getElementById('url').value=' ';
}