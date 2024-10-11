let countEl = document.getElementById("count-el") 
let count = 0

let saveEl = document.getElementById("save-el")
console.log(saveEl)

function increment(){
count += 1 
// countEl.innerText = count       
countEl.textContent = count            //we change innerText to textContent
}

console.log(countEl)

function save(){
   let coudas = count + "-"
    saveEl.textContent += coudas
  countEl.textContent = 0
  count = 0
}

   





