
setInterval(()=>{

const date = new Date();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const hourRotation = 30 * hour + minute / 2;
const minuteRotaion = minute * 6;
const secondRotation = second * 6;

document.getElementById("hour").style.transform = `rotate(${hourRotation}deg)`;
document.getElementById("minute").style.transform = `rotate(${minuteRotaion}deg)`;
document.getElementById("second").style.transform = `rotate(${secondRotation}deg)`;

},1000)
