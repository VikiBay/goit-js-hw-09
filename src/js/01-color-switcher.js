const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
}

let intervalId = null;

refs.start.addEventListener("click", onStartClick)
refs.stop.addEventListener("click", onStopClick)

function onStartClick (){
    intervalId = setInterval(() =>{
        this.setAttribute('disabled',true)
        refs.stop.removeAttribute('disabled')
        document.body.style.backgroundColor = getRandomHexColor()
        
    },1000)
    
}

function onStopClick(){
    refs.start.removeAttribute('disabled')
    this.setAttribute('disabled',true)
    clearInterval(intervalId)
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }