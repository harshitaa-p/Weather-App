// to load different images
const backgroundImages = [
    'img/w1.jpg',
    'img/w2.jpg',
    'img/w3.jpg',
    'img/w4.jpg',
    'img/w5.jpg',
    'img/w6.jpg',
    'img/w7.jpg',
    'img/w8.jpg',
    'img/w9.jpg',
    'img/w10.jpg',
    'img/w11.jpg',
    'img/w12.jpg',
    'img/w13.jpg',
    'img/w14.jpg',
    'img/w15.jpg'
    // Add more image URLs as needed
];

// Function to set a random background image
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    const backgroundContainer = document.querySelector('.main-container');
    backgroundContainer.style.backgroundImage = `url(${randomImage})`;
}

// Call the function to set a random background when the page loads
window.addEventListener('load', setRandomBackground);

//for current date
const currentDate=new Date();
const monthName=["January","February","March","April","May","June","July","August","September","October","November","December"]

const month=monthName[currentDate.getMonth()];
const date=currentDate.getDate();
const year=currentDate.getFullYear();

const formatDate=`${month} ${date}, ${year}`

const currentDateElement=document.getElementById("content2");
currentDateElement.innerHTML=formatDate;


//for current time
    let date1 = new Date();
 
    let hours = date1.getHours();
    let minutes = date1.getMinutes();
 
    // Check whether AM or PM
    const newformat = hours >= 12 ? 'PM' : 'AM';
 
    // Find current hour in AM-PM Format
    hours = hours % 12;
 
    // To display "0" as "12"x
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
 
    const formatTime=`${hours}:${minutes}  ${newformat}`

    const currentTime=document.getElementById("content2-2");
    currentTime.innerHTML=formatTime;


//for functionality to load current weather
(async function(){

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fef979b45fmshbc8477c4032424bp1be3f0jsneaeb1a258303',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather(city){
    cityName.innerHTML= city;


try {
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options);
	const result = await response.json();
	console.log(result.temp);

	const temp=document.getElementById("tmp");
	const wind_speed=document.getElementById("wind");	
	const cloud_pct=document.getElementById("cloud");	


	temp.innerHTML=result['temp']+"°C";
	humidity.innerHTML=result['humidity']+"%"; 
	wind_speed.innerHTML=result.wind_speed+" "+"km/hr";
	cloud_pct.innerHTML=result.cloud_pct;

	console.log(result);

    
} catch (error) {
	console.error(error);
}}

   const searchInput=document.getElementById("city");  

   submit.addEventListener("click",()=>

    getWeather(city.value)
)

searchInput.addEventListener("keydown",function(event){
    if(event.keyCode===13){
        getWeather(city.value);
        const randomIndex = Math.floor(Math.random()*backgroundImages.length);
        const randomImage = backgroundImages[randomIndex];
        setRandomBackground(randomImage);
    }

})

getWeather("Delhi");

} )();


