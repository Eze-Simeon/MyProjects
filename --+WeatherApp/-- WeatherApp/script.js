


const api = {
    key : "44e3cb23cdb0db5a8c9dc71fc43f5485",
    // key: "28fd15358cdecbc1a1dfef367e71acef",
    base : "https://api.openweathermap.org/data/2.5/"

}


const search = document.querySelector(".search");
const btn = document.querySelector(".btn");


btn.addEventListener("click", getInput)

function getInput(e){
    e.preventDefault();
    if(e.type === "click"){
        getData(search.value)
    };
}

function getData() {
    // fetch(`api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${api.key}`)
       fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then(response => {
        return response.json()
    })
    .then(displayData)
    
}

function displayData(response) {
    console.log(response);
    const city = document.querySelector(".city");
    const date = document.querySelector(".date");
    const temp = document.querySelector(".temp");
    const weather = document.querySelector(".weather");
    const img = document.querySelector(".weather-icon");
    const tempRange = document.querySelector(".temp-range");
    const error = document.querySelector(".error");

    
    if (response.cod === "404") {
        error.innerText = "please enter a valid city";
        error.style.color = "red";
        search.value = "";

        setTimeout(() => {
            error.innerText = ""; 
        }, 3000);
    }
     else {
        console.log(response);
        city.innerHTML = `<div>${response.name}, ${response.sys.country}</div>`
        date.innerHTML = dateFunc(new Date());
        temp.innerHTML = `<div>Temp: ${response.main.temp}<span>°C</span></div>`
        weather.innerHTML = `<div>Weather: ${response.weather[0].main}</div>`
        tempRange.innerHTML = `<div>Temp Range: ${Math.round(response.main.temp_min)} <span>°C</span> / ${Math.round(response.main.temp_max)} <span>°C</span></div>`
        const iconURL = "http://openweathermap.org/img/w/";
        img.src = iconURL + response.weather[0].icon + ".png";

        search.value = ""

    }
}

function dateFunc(d) {
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let year =[d.getFullYear()]
    let month = months[d.getMonth()]
    let day = days[d.getDay()]
    let date = d.getDate()

    return `${day}, ${month} ${date} ${year}`
}
































// const api = {
//     key: "28fd15358cdecbc1a1dfef367e71acef",
//     base: "https://api.openweathermap.org/data/2.5/"
// }

// const search = document.querySelector(".search");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", getInput);

// function getInput (event) {
//     event.preventDefault();
//     if (event.type == "click") {
//         getData(search.value);
//         console.log(search.value);
//     }
// }

// function getData () {
//     fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
//         .then(response => {
//             return response.json();
//         }).then(displayData);
        
// }

// function displayData (response) {
//     console.log(response);
//     if (response.cod === "404") {
//         const error = document.querySelector(".error");
//         error.textContent = "Please enter a valid city";
//         search.value = "";
//     } else {
//         const city = document.querySelector(".city");
//         city.innerText = `${response.name}, ${response.sys.country}`;

//         const today = new Date();
//         const date = document.querySelector(".date");
//         date.innerText = dateFunction(today);

//         const temp = document.querySelector(".temp");
//         temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;

//         const weather = document.querySelector(".weather");
//         weather.innerText = `Weather: ${response.weather[0].main}`;

//         const tempRange = document.querySelector(".temp-range");
//         tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

//         const weatherIcon = document.querySelector(".weather-icon");
//         const iconURL = "http://openweathermap.org/img/w/";
//         weatherIcon.src = iconURL + response.weather[0].icon + ".png";

//         search.value = "";
//     }
// }

// function dateFunction (d) {
//     let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day}, ${date} ${month} ${year}`;
// }