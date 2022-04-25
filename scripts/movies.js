// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// http://www.omdbapi.com/?i=tt3896198&apikey=6a7df223

// poster, movie name, book now button



let h1 = document.querySelector("#wallet")
h1.innerText = localStorage.getItem("amount")


async function movies(){
    try{

        const q = document.querySelector("#search").value
        // let res = await fetch(`https://www.omdbapi.com/?t=${q}&apikey=6a7df223`)
        let res = await fetch(`https://www.omdbapi.com/?t=${q}&apikey=6a7df223`)
        
        let data = await res.json()
        // console.log('data:', data)
        let poster = data.Poster
        // console.log('poster:', poster)
        let title = data.Title
        // console.log('title:', title)
        // append(data)
        return data

    }catch(err){
        console.log('err:', err) 
    }
}
let arr = []
let movieData = []
let movies_div = document.querySelector("#movies")
function append(data){

    if(data == undefined){
        return false
    }
    movies_div.innerHTML = null
    arr.push(data)
    arr.forEach(function(ele){
        let box = document.createElement("div")

        let poster = document.createElement("img")
        poster.src = ele.Poster

        let title = document.createElement("p")
        title.innerText = ele.Title

        let btn = document.createElement("button")
        btn.innerText = "Book Now"
        btn.setAttribute("class", "book_now")
        btn.addEventListener("click", function(){
            addToCheckout(ele)
        })

        box.append(poster, title, btn)
        movies_div.append(box)
        // addToCheckout(ele)
    })
}

function addToCheckout(ele){
    console.log('ele:', ele)
    movieData.push(ele)
    localStorage.setItem("movie", JSON.stringify(movieData))
    window.location.href="checkout.html"
}
async function temp(){
    let data = await movies()
    if(data == undefined){
        return false
    }
    append(data)
}

function debounce(temp1, delay){
    let id = setTimeout(function(){
        temp1()
    }, delay)
}