// function geoFindMe() {
//
//     const status = document.querySelector('#status');
//     const mapLink = document.querySelector('#mapLink');
//     //const cityButton = document.querySelector('#cityButton');
//
//     mapLink.href = '';
//     mapLink.textContent = '';
//
//     function success(position) {
//         const latitude  = position.coords.latitude;
//         const longitude = position.coords.longitude;
//
//         status.textContent = '';
//         mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//         mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//     }
//
//     function error() {
//         status.textContent = 'Unable to retrieve your location';
//     }
//
//     if (!navigator.geolocation) {
//         status.textContent = 'Geolocation is not supported by your browser';
//     } else {
//         status.textContent = 'Locating…';
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
//
// }

async function getMyLocation(){

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

}

//document.querySelector('#findMe').addEventListener('click', geoFindMe);

const searchButton =document.querySelector('#searchButton')
const cityInput =document.querySelector('#city')
const weatherForm =document.querySelector('#weatherForm')
const getCityBtnRef = document.querySelector('#cityButton')



getCityBtnRef.addEventListener('click', async (ev) => {
    const {coords: {latitude, longitude}} = await getMyLocation();

    const {name} = await getCity(longitude, latitude)

    cityInput.value = name;

})

weatherForm.addEventListener('submit', async (ev)=> {
    ev.preventDefault()
    const city = cityInput.value

    if (city !=='') {

    const {coord: {lon, lat}} = await getLocation(city);

    const data = await getWeather(lon, lat)
    console.log(data);
    }
})


const apiKey = '68e2a081a82b3b45bc6a1f69cd8105aa'; // API OpenWeatherMap
async function getLocation(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` )

    return  await response.json();
}
async function getCity(long, lat){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)

    return await response.json();
}
async function getWeather(long, lat){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)

    return await response.json();
}