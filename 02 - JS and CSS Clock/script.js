const hourHand = document.querySelector(`.hour-hand`)
const minuteHand = document.querySelector(`.min-hand`)
const secondHand = document.querySelector(`.second-hand`)
console.log(secondHand)
function setDate(){
    const now = new Date();
    const second = now.getSeconds() 
    const minute = now.getMinutes() 
    const hour = now.getHours() 
    const secondDeg = (second/60)*360 + 90;
    const minuteDeg = (minute/60)*360 + 90;
    const hourDeg = (hour/24)*360 + 90;
    console.log(second)
    console.log(minute)

    secondHand.style.transform = `rotate(${secondDeg}deg)`
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
      
}
setInterval(setDate, 1000);