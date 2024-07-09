const AccessKey = "8mZlLkcuSeSkCXNl2hyf8ZfnGdPEQPNuywwpZwF7lBM"
let searchform = document.getElementById("searchform")
let searchbox = document.getElementById("searchbox")
let sresult = document.getElementById("result")
let showmore = document.getElementById("showmore")

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchbox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12 `


    const responce = await fetch(url);
    const data = await responce.json()

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small
        imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"


        imageLink.appendChild(image);
        sresult.appendChild(imageLink)
    })
    showmore.style.display = "block"
}

searchform.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showmore.addEventListener("click", ()=>{
    page++;
    searchImages();
})

