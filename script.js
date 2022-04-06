setInterval(setClock, 1000);

const hourhand = document.querySelector('[data-hour-hand]')
const minhand = document.querySelector('[data-mins-hand]')
const sechand = document.querySelector('[data-secs-hand]')

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;


    setRotation(sechand, secondRatio)
    setRotation(minhand, minuteRatio)
    setRotation(hourhand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()