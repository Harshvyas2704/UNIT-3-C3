// Store the wallet amount to your local storage with key "amount"


// 1 get amount from input tag - done
// 2 show in h1 tag - done
// 3 set it into local storage with key amount - done

let amount = Number(localStorage.getItem("amount")) || 0;
let h1 = document.querySelector("#wallet")
h1.innerText = localStorage.getItem("amount")

function addToWallet(){
    let value = document.querySelector("#amount").value
    test(value)
    console.log(amount)
    localStorage.setItem("amount", amount)
    // h1 = document.querySelector("#wallet")
    h1.innerText = localStorage.getItem("amount")
}

function test(value){
    amount = amount + Number(value)
}

function goToMovies(){
    window.location.href="movies.html"
}