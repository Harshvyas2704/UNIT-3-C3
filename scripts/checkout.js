// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let h1 = document.querySelector("#wallet")
h1.innerText = localStorage.getItem("amount")


let movie = JSON.parse(localStorage.getItem("movie")) || []

let box = document.createElement("div")

let title = document.createElement("p")
title.innerText = movie[0].Title

let poster = document.createElement("img")
poster.src = movie[0].Poster

// console.log(movie[0].Title)

box.append(title, poster)
document.querySelector("#movie").append(box)




function confirmed(){
    let seats = document.querySelector("#number_of_seats").value
    console.log('seats:', seats)
    let money = Number(localStorage.getItem("amount"))
    console.log('money:', money)
    
    if(money/100 >= seats){
        alert("Booking successful!")
        h1.innerText = money - (seats*100)
        localStorage.setItem("amount", money - (seats*100))
    }
    if(money/100 < seats){
        alert("Insufficient Balance!")
    }
}
