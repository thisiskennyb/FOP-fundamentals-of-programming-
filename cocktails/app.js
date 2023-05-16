document.querySelector('button').addEventListener("click", updateUserInput)



function updateUserInput() {
  userInput = document.querySelector('input').value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let drinkName = data.drinks[0]['strDrink']
    let picture = data.drinks[0]['strImageSource']
    let instructions = data.drinks[0]['strInstructions']
    document.querySelector("#drinkName").textContent = drinkName
    document.querySelector("#instructions").textContent = instructions
    document.querySelector("img").src = picture
    console.log(data)
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}




