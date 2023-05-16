localStorage.setItem('count', 0)


let currentValue = localStorage.getItem('count')


document.querySelector('#addOne').addEventListener("click", addOne)
document.querySelector('#subtractOne').addEventListener("click", subtract)
document.querySelector('#clear').addEventListener("click", clear)
// let count = 1

function addOne() {
    currentValue++
    localStorage.setItem('count', currentValue)
    document.querySelector('#botcount').innerText = currentValue
}

function subtract() {
    currentValue--
    localStorage.setItem('count', currentValue)
    document.querySelector('#botcount').innerText = currentValue

}

function clear() {
    currentValue = 0
    localStorage.setItem('count', currentValue)
    document.querySelector('#botcount').innerText = currentValue
    
}






// console.log(getStr)