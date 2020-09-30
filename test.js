let key = `854896a8cec6c29e76e79e5efb82737a`;
let zip = 40383;//document.getElementById("zip").value
let api = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`;
let data = null; //until we need to add context to this var
// write fetch statement to get information from API
//setting up variables to fill data tables
let city = document.getElementById("city");
let tempK = document.getElementById("tempK");
let tempF = document.getElementById("tempF");
let tempC = document.getElementById("tempC");
let icon = document.getElementById("wtrIcon");
let currentCond = document.getElementById("cond");
let btn = document.getElementById("getweather");

document.getElementById("hideTable").style.display = 'none';

btn.addEventListener('click', callWeatherAPI, true);

//input zip for API to return weather for inputted zip

async function callWeatherAPI() {
    let zipInput = document.getElementById("zip").value;
    let newApi = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput}&appid=${key}`;
    let validZip = validateZipCode(zipInput);
    if (validZip) {

        const response = await fetch(newApi).then(function (response) {
            return response.json();
        }).then(function (json) {

            data = json;
            console.log(json);
            //invalid data throw alert 404
            //otherwise update view with good data
            if (data.cod == "404") {
                alert(data.message);
            }

            else {
                city.textContent = data.name;
                tempK.textContent = data.main.temp + " K";
                currentCond.textContent = data.weather[0].description
                wtrIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`
                // converting and displaying temp in C
                tempC.textContent = Math.ceil(data.main.temp - 273.15) + "°C";

                //convert to F and display
                tempF.textContent = Math.ceil((data.main.temp - 273.15) * (9 / 5) + 32) + "°F";
                document.getElementById("hideTable").style.display = 'block';
            }


        })
            .catch(function (err) {
                console.log(`fetch problem:` + err.message);
            });
    }
    else {
        alert("Enter a valid zip!")
    }
}
   //console.log(response);
    //alert()
//callWeatherAPI();
//zip code validating
function validateZipCode(zipInput) {
    let zipCodeAlgo = /^\d{5}$|^\d{5}-\d{4}$/;
    return zipCodeAlgo.test(zipInput)
}
//const currentWeather
console.log(Math.log(.1));
async function cloudHeight(){
    let zipInput = document.getElementById("zip").value;
    let newApi = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput}&appid=${key}`;
    let validZip = validateZipCode(zipInput);
    if (validZip) {

        const response = await fetch(newApi).then(function (response) {
            return response.json();
        }).then(function (json) {

            data = json;
            console.log(json);
            //invalid data throw alert 404
            //otherwise update view with good data
            if (data.cod == "404") {
                alert(data.message);
            }

            else {
                let T = (data.main.temp - 273.15);
                console.log(T);
                /* city.textContent = data.name;
                tempK.textContent = data.main.temp + " K";
                currentCond.textContent = data.weather[0].description
                wtrIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`
                // converting and displaying temp in C
                tempC.textContent = Math.ceil(data.main.temp - 273.15) + "°C";

                //convert to F and display
                tempF.textContent = Math.ceil((data.main.temp - 273.15) * (9 / 5) + 32) + "°F"; */
                document.getElementById("hideTable").style.display = 'block';
            }


        })
            .catch(function (err) {
                console.log(`fetch problem:` + err.message);
            });
    }
    else {
        alert("Enter a valid zip!")
    }
}



/*function userZip(){
   let zipCode = document.getElementById(zip).innerHTML=""
   console.log(zipCode)
}*/
