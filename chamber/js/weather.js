let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/idahofalls?unitGroup=us&key=EWQF52DJKF9B9NEMA45J3VZGW&contentType=json";

async function weather(link){
    let response = await fetch(link);
    if (response.ok){
        let obj = await response.json();
        let icon = document.createElement("img")
        let img = obj["days"][0]["icon"];
        let iconUrl=`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${img}.png`;
        icon.src = iconUrl;
        document.querySelector(".windspeed").textContent = obj["days"][0]["windspeed"];
        document.querySelector(".temp").textContent =`${obj["days"][0]["temp"]} C`;
        document.querySelector(".weather").appendChild(icon);


        let windSpeed = document.querySelector(".windspeed").textContent;
        let temp = document.querySelector(".temp").textContent;
        let windChill = document.querySelector(".windchill");


        function getWindChill() {
            let tempInt = parseFloat(temp);
            let windSpeedInt = parseFloat(windSpeed);
            if (tempInt < 50 && windSpeedInt > 4.8) {
                let chill = Math.round((35.74 + (0.6215 * tempInt)) - (35.75 * Math.pow(windSpeedInt,0.16)) + (0.4275*tempInt*Math.pow(windSpeedInt,0.16)));

                windChill.innerHTML = chill;
            } else {
                windChill.textContent = "N/A";
            }
        }
        getWindChill();

    }
}
weather(url);






