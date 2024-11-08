let myNumber
console.log(myNumber);
myNumber = 10
console.log(myNumber);

// Highlight code and press ctrl + forward slash (next to right shift key)
// console.log(myNumber % 5)
// console.log(myNumber / 5)

// console.log(myNumber % 3)
// console.log(myNumber / 3)

console.log(myNumber % 2)

myNumber = 10

function checkEven() {
let header = document.getElementById("numberHeader")
console.log(header)
console.log(header.textContent)

    if (myNumber % 2 == 0) {
        console.log("Even Number")
        header.textContent = myNumber +  " is a " + " even Number"
    } 
    
    else {
       console.log("Odd Number") 
       header.textContent = myNumber +  " is a " + " odd Number"
    }

}

let count = 5
let countdownH = document.getElementById("countdownHeader")
countdownH.textContent = count

function countdownNum(){
    --count
    countdownH.textContent = count
    //alert(count)
}



