const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
// the below if statement is to turn off the transition for when it reaches the top and rewinds back funny
    if(seconds === 0) {
        secondHand.style.transitionDuration = '0s';
        minuteHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
        } else {
            secondHand.style.transitionDuration = '0.2s';
            minuteHand.style.transitionDuration = '0.2s';
            hourHand.style.transitionDuration = '0.2s';
        }

}
setInterval(setDate, 1000);