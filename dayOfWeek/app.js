document.querySelector('#check').addEventListener('click', checkDay)

function checkDay() {
  let weekDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
  let weekend = ['saturday', 'sunday']
  
  const day = document.querySelector('#day').value
  const whichDay = document.querySelector('#placeToSee')
  
  if (weekDay.includes(day.toLowerCase())) {
    whichDay.textContent = 'week day'
  }
  else if (weekend.includes(day.toLowerCase())) {
    whichDay.textContent = 'weekend'
  }
  else  {
    whichDay.textContent = 'Not a valid input'
  }

}
