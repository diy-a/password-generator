let password = document.getElementsByTagName("img")

let pass1 = document.getElementById("result1")
let pass2 = document.getElementById("result2")
let pass3 = document.getElementById("result3")
let pass4 = document.getElementById("result4")

let chars = ["0","1","2","3","4","5","6","7","8","9",
            "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
            "!","@","#","$","%","^","&","*","(",")",
            "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function randomPassword() {
    let password = []
    for (let i = 0; i < 10; i++) {
        randomVal = chars[Math.floor(Math.random() * chars.length)] 
        password += randomVal
    }
    return password
}

function generatePassword(){
    pass1.textContent = randomPassword()
    pass2.textContent = randomPassword()
    pass3.textContent = randomPassword()
    pass4.textContent = randomPassword()
    
}

function copyField1() {
    let input = document.getElementById("result1").innerText
    navigator.clipboard.writeText(input)
    alert("Password copied!")
}
function copyField2() {
    let input = document.getElementById("result2").innerText
    navigator.clipboard.writeText(input)
    alert("Password copied!")
}
function copyField3() {
    let input = document.getElementById("result3").innerText
    navigator.clipboard.writeText(input)
    alert("Password copied!")
}
function copyField4() {
    let input = document.getElementById("result4").innerText
    navigator.clipboard.writeText(input)
    alert("Password copied!")
}

