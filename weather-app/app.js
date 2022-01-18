window.addEventListener('load', ()=> {
  let long;
  let lat;
  let tempDescription = document.querySelector(".temperature-description");
  let tempDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let feelsLike = document.querySelector(".feels-like");

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7d0675b8baa419b293d280ce237663e9`

        fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const {temp, feels_like} = data.main;
          const {description, icon} = data.weather[0];

          //Set DOM Elements from API
          tempDegree.textContent = temp-273.15;
          feelsLike.textContent = `Feels like: ${feels_like-273.15}`
          locationTimezone.textContent = data.name;
          tempDescription.textContent = description;
        });
      });    
  }else {
    h1.textContent = "Hey, cannot load. Need location access"
  }

  function setIcons(icon , iconID){
    const skycons = new skycons({color: "white"});
    const currIcon = icon 
  }
});