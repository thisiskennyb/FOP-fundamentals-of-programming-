document.querySelector('button').addEventListener('click', getFetch)



async function getFetch() {
    let month = document.querySelector('#month').value
    let year = document.querySelector('#year').value
    let day = document.querySelector('#day').value
    let date = year + '-' + month + '-' + day
 
    const url = `https://api.nasa.gov/planetary/apod?api_key=SAiqhpL8ra9wXtY7V3ujI4oFbjObcjh2k6xL5GRK&date=${date}`

    let data = await fetch(url)
    let photoOfDay = await data.json()
    
    document.querySelector('img').src = photoOfDay['url']
    document.querySelector('#explanation').innerHTML = photoOfDay['explanation']
}